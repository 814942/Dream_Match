import axios from "axios"
import { NextResponse } from "next/server"

// const $URL = "apiv3.apifootball.com/?action=get_players"
const $URL = "https://apiv3.apifootball.com/?action=get_teams&league_id=44"
const apiKey = process.env.NEXT_PUBLIC_API_KEY
console.log("🚀 ~ apiKey:", apiKey)

export async function GET() {
  try {
    
    const { data } = await axios.get(`${$URL}&APIkey=${apiKey}`)
    
    // const orderedData = data.sort((a: any, b: any) => b.id - a.id)
    return NextResponse.json(data)
  } catch (error) {
    throw error
  }
}