import { NextResponse } from 'next/server'

export async function GET() {
  // In a real-world scenario, you would determine the user's age group
  // based on user data, cookies, or other factors. For this example,
  // we'll randomly assign an age group.
  const ageGroups = ['young-adult', 'middle-aged', 'senior']
  const randomGroup = ageGroups[Math.floor(Math.random() * ageGroups.length)]

  return NextResponse.json({ ageGroup: randomGroup })
}
