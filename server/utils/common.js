//return an object for all those queries that don't return a util response for the system
export const resLog = (id) => ({message: "ok -- " + id})

const commModule = {
    resLog
}

export default commModule