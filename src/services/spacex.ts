import { type Doc , type APISpaceXResponse } from '../types/api'

export const getLaunchBy = async ({id}:{id:string}) => {

    const rest = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
    const launches = (await rest.json()) as Doc
    return launches
}

export const getLatestLaunches = async () => {

    const rest = await fetch('https://api.spacexdata.com/v5/launches/query',
    {
        method: "POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                limit: 12,
            },
        })
    }
    )
    const { docs:launches } = await rest.json() as APISpaceXResponse
    return launches
}

