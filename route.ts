import {NextResponse} from "next/server"

const External_API_URL = "https://jsonplaceholder.typicode.com/posts"



export async function GET () {
    try {
        const response = await fetch (External_API_URL)

        if (!response.ok){
            return NextResponse.json(
                {success: false, message: "fetch the data from API"},
                {status: response.status}
            )
        }
        const data = await response.json()
        return NextResponse.json ({success: true , data})
    } catch (error: any) {
        return NextResponse.json({
          success: false, message: "get the error",
          error: error.message  
        })
    }
}