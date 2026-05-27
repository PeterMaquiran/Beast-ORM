import { registerPipe } from "../Utility/Either/APIResponse.js"


function executionTime ({createdDate, THIS}: {createdDate: any, THIS: any}) {
  THIS.executionTime = () => {
    return (new Date() as any) - createdDate
  }
}
registerPipe(executionTime)
