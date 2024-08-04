import axios from "axios"
import { NextResponse } from "next/server"

const $URL = "https://apiv3.apifootball.com/?action=get_teams&league_id=44"
const apiKey = process.env.NEXT_PUBLIC_API_KEY

export async function GET() {
  try {
    const { data } = await axios.get(`${$URL}&APIkey=${apiKey}`)

    return NextResponse.json(data)
  } catch (error) {
    throw error
  }
}