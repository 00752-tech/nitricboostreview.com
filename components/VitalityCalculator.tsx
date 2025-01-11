'use client'

import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { AlertCircle, Battery, Brain, Heart, Utensils } from 'lucide-react'

interface VitalityResult {
  score: number;
  message: string;
  recommendations: string[];
  warning?: string;
  category: 'critical' | 'concerning' | 'moderate' | 'good' | 'excellent';
  focusAreas: string[];
}

export default function VitalityCalculator() {
  const [diet, setDiet] = useState(5)
  const [exercise, setExercise] = useState(5)
  const [stress, setStress] = useState(5)
  const [sleep, setSleep] = useState(5)
  const [result, setResult] = useState<VitalityResult | null>(null)

  const getLifestyleCategory = (diet: number, exercise: number, stress: number, sleep: number): string => {
    const total = diet + exercise + (11 - stress) + sleep
    if (total < 16) return "critical-health-risk"
    if (total < 24) return "significant-improvement-needed"
    if (total < 32) return "moderate-lifestyle-imbalance"
    if (total < 40) return "good-with-room-for-improvement"
    return "excellent-vitality"
  }

  const getPersonalizedRecommendations = (category: string, scores: {
    diet: number;
    exercise: number;
    stress: number;
    sleep: number;
  }): string[] => {
    const recommendations: { [key: string]: string[] } = {
      "critical-health-risk": [
        "Consult with a healthcare professional immediately for a comprehensive health assessment",
        "Start with small, achievable daily goals to improve each area of your lifestyle",
        "Consider seeking support from a mental health professional to address potential underlying issues",
        "Gradually introduce nutrient-dense foods into your diet, focusing on whole grains, lean proteins, and vegetables",
        "Begin with gentle, low-impact exercises like walking or swimming for 10-15 minutes daily",
        "Implement a consistent sleep schedule, aiming for 7-9 hours of sleep per night",
        "Practice deep breathing exercises for 5 minutes each day to manage stress"
      ],
      "significant-improvement-needed": [
        "Schedule a check-up with your primary care physician to discuss your health concerns",
        "Create a meal plan that includes a variety of fruits, vegetables, whole grains, and lean proteins",
        "Aim for 150 minutes of moderate-intensity exercise per week, spread across at least 3 days",
        "Establish a bedtime routine to improve sleep quality, including limiting screen time before bed",
        "Consider trying meditation or mindfulness apps to help manage daily stress",
        "Evaluate your work-life balance and make necessary adjustments to reduce chronic stress",
        "Explore natural supplements like Nitric Boost Ultra to support your body's vitality"
      ],
      "moderate-lifestyle-imbalance": [
        "Focus on increasing your intake of nutrient-dense foods and reducing processed foods",
        "Gradually increase your exercise intensity and duration, aiming for a mix of cardio and strength training",
        "Implement stress-reduction techniques such as progressive muscle relaxation or yoga",
        "Optimize your sleep environment for better quality rest, considering factors like room temperature and noise levels",
        "Consider keeping a food and mood journal to identify patterns and areas for improvement",
        "Set specific, measurable goals for each area of your lifestyle and track your progress weekly",
        "Investigate how Nitric Boost Ultra could complement your improving lifestyle habits"
      ],
      "good-with-room-for-improvement": [
        "Fine-tune your diet by incorporating a wider variety of colorful fruits and vegetables",
        "Challenge yourself with new forms of exercise to prevent plateaus and maintain motivation",
        "Practice mindfulness throughout the day to manage stress proactively",
        "Optimize your sleep cycle by maintaining consistent wake and sleep times, even on weekends",
        "Consider intermittent fasting or time-restricted eating under professional guidance",
        "Incorporate more social activities that align with your health goals",
        "Explore how Nitric Boost Ultra can help you reach the next level of vitality"
      ],
      "excellent-vitality": [
        "Maintain your healthy habits while exploring advanced nutrition strategies like nutrient timing",
        "Incorporate high-intensity interval training (HIIT) to maximize your fitness gains",
        "Explore advanced stress management techniques like biofeedback or float therapy",
        "Fine-tune your sleep quality with sleep tracking devices and optimize based on the data",
        "Consider periodization in your diet and exercise routines to continue challenging your body",
        "Share your success and knowledge with others, perhaps by mentoring or starting a health-focused group",
        "Integrate Nitric Boost Ultra into your regimen to support and enhance your already excellent vitality"
      ]
    }

    const baseRecs = recommendations[category] || []
    
    // Add specific recommendations based on individual scores
    const specificRecs: string[] = []
    
    if (scores.diet < 4) {
      specificRecs.push("Prioritize increasing your intake of leafy greens, which are rich in nitrates that support nitric oxide production")
    } else if (scores.diet < 7) {
      specificRecs.push("Consider adding more nitrate-rich foods like beets, arugula, and spinach to your diet to naturally boost nitric oxide levels")
    }
    
    if (scores.exercise < 4) {
      specificRecs.push("Start with short, 10-minute walks twice daily and gradually increase duration and intensity")
    } else if (scores.exercise < 7) {
      specificRecs.push("Incorporate resistance training 2-3 times a week to improve overall cardiovascular health and nitric oxide production")
    }
    
    if (scores.stress > 7) {
      specificRecs.push("Practice the 4-7-8 breathing technique daily: inhale for 4 seconds, hold for 7, exhale for 8")
    } else if (scores.stress > 5) {
      specificRecs.push("Try a 10-minute guided meditation before bed to reduce stress and improve sleep quality")
    }
    
    if (scores.sleep < 4) {
      specificRecs.push("Create a sleep-conducive environment: use blackout curtains, white noise, and keep the room cool")
    } else if (scores.sleep < 7) {
      specificRecs.push("Limit caffeine intake after 2 PM and establish a relaxing pre-sleep routine")
    }

    return [...baseRecs, ...specificRecs].slice(0, 7) // Limit to 7 recommendations
  }

  const calculateScore = () => {
    const scores = { diet, exercise, stress, sleep }
    const rawScore = (diet + exercise + (11 - stress) + sleep) * 2.5 // Scale to 100
    const finalScore = Math.min(Math.max(Math.round(rawScore), 0), 100)
    const category = getLifestyleCategory(diet, exercise, stress, sleep)
    
    let resultCategory: VitalityResult['category']
    if (finalScore < 40) resultCategory = 'critical'
    else if (finalScore < 60) resultCategory = 'concerning'
    else if (finalScore < 75) resultCategory = 'moderate'
    else if (finalScore < 90) resultCategory = 'good'
    else resultCategory = 'excellent'

    const focusAreas = []
    if (diet < 6) focusAreas.push('Nutrition')
    if (exercise < 6) focusAreas.push('Physical Activity')
    if (stress > 5) focusAreas.push('Stress Management')
    if (sleep < 6) focusAreas.push('Sleep Quality')

    const result: VitalityResult = {
      score: finalScore,
      category: resultCategory,
      message: getResultMessage(finalScore, category),
      recommendations: getPersonalizedRecommendations(category, scores),
      focusAreas,
      ...(finalScore < 50 && {
        warning: "Given your current vitality score, we strongly recommend consulting with a healthcare professional for personalized advice before starting any new supplement or exercise regimen."
      })
    }

    setResult(result)
  }

  const getResultMessage = (score: number, category: string): string => {
    const messages: { [key: string]: string } = {
      "critical-health-risk": `Your vitality score of ${score} indicates significant health risks. Immediate lifestyle changes are crucial for your well-being.`,
      "significant-improvement-needed": `With a vitality score of ${score}, there's substantial room for improvement in your overall health and lifestyle habits.`,
      "moderate-lifestyle-imbalance": `Your vitality score of ${score} suggests some lifestyle imbalances. Addressing these can lead to noticeable improvements in your well-being.`,
      "good-with-room-for-improvement": `Congratulations on achieving a vitality score of ${score}. You're on the right track, with opportunities to further enhance your health.`,
      "excellent-vitality": `Outstanding! Your vitality score of ${score} reflects excellent health habits. Focus on maintaining and optimizing your already healthy lifestyle.`
    }

    return messages[category] || `Your vitality score is ${score}/100. There's always room for improvement in health and wellness.`
  }

  const getCategoryColor = (category: VitalityResult['category']) => {
    const colors = {
      critical: 'text-red-500',
      concerning: 'text-orange-500',
      moderate: 'text-yellow-500',
      good: 'text-green-500',
      excellent: 'text-blue-500'
    }
    return colors[category]
  }

  return (
    <div className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-white">Personalized Vitality Assessment</h3>
      <p className="text-gray-300 mb-8">
        Complete this assessment to receive tailored recommendations for optimizing your vitality.
      </p>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="w-5 h-5 text-purple-400" />
            <label className="text-white">Nutritional Quality (1-10)</label>
          </div>
          <Slider
            value={[diet]}
            onValueChange={(value) => setDiet(value[0])}
            max={10}
            step={1}
            className="my-4"
          />
          <p className="text-sm text-gray-400">Consider your daily intake of whole foods, vegetables, and lean proteins</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-pink-400" />
            <label className="text-white">Physical Activity (1-10)</label>
          </div>
          <Slider
            value={[exercise]}
            onValueChange={(value) => setExercise(value[0])}
            max={10}
            step={1}
            className="my-4"
          />
          <p className="text-sm text-gray-400">Include both structured exercise and daily movement</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-blue-400" />
            <label className="text-white">Stress Level (1-10)</label>
          </div>
          <Slider
            value={[stress]}
            onValueChange={(value) => setStress(value[0])}
            max={10}
            step={1}
            className="my-4"
          />
          <p className="text-sm text-gray-400">Higher numbers indicate more stress</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Battery className="w-5 h-5 text-green-400" />
            <label className="text-white">Sleep Quality (1-10)</label>
          </div>
          <Slider
            value={[sleep]}
            onValueChange={(value) => setSleep(value[0])}
            max={10}
            step={1}
            className="my-4"
          />
          <p className="text-sm text-gray-400">Consider both duration and quality of sleep</p>
        </div>

        <Button 
          onClick={calculateScore}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-6 text-lg"
        >
          Calculate My Vitality Score
        </Button>
        
        {result && (
          <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-2xl font-semibold text-white">
                Your Results
              </h4>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{result.score}</span>
              </div>
            </div>

            <p className={`text-lg mb-6 ${getCategoryColor(result.category)}`}>{result.message}</p>

            {result.focusAreas.length > 0 && (
              <div className="mb-6">
                <h5 className="text-white font-semibold mb-2">Priority Focus Areas:</h5>
                <div className="flex flex-wrap gap-2">
                  {result.focusAreas.map((area, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-white">Personalized Recommendations:</h5>
              <ul className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-purple-400">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            {result.warning && (
              <div className="mt-6 flex items-start space-x-2 text-yellow-400 bg-yellow-400/10 p-4 rounded-lg">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>{result.warning}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <p className="mt-6 text-sm text-gray-400">
        Note: This assessment provides general recommendations based on your inputs. Individual results may vary, and it's always advisable to consult with healthcare professionals for personalized advice. This calculator is designed to provide general guidance and should not be considered a substitute for professional medical advice, diagnosis, or treatment.
      </p>
    </div>
  )
}

