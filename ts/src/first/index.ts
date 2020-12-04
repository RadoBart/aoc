import {tryReadFile} from "tslint/lib/files/reading";
import {Logger} from "tslint/lib/runner";

main(process.argv.slice(2)[0]).then(e => console.log(e))
async function main(filePath: string): Promise<number>{
  const logger : Logger = {
    error(message: string): void {
    }, log(message: string): void {
    }
  }
  const file = await tryReadFile(filePath, logger)
  const listJson = JSON.parse(file ?? '')
  const listLength = listJson.length
  return [0].concat(listJson).reduce((acc, val, index, arr) => {
    const result = [0].concat(arr.slice(index + 1, listLength)).reduce(
      (acc_2, val_2, index_2, arr_2) => {
        const matchingEl = arr_2.slice(index_2 + 1, listLength).find(el => (el + val + val_2) === 2020)
        if (matchingEl) {
          arr_2.splice(0)
          return matchingEl * val * val_2
        }
        return acc
    })
    if (result) {
      arr.splice(0)
      return result
    }
    return acc
  })
}
