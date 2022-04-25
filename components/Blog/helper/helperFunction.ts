export function convertSymbolsFromCode(name: any = "") {
    let final = null;
    if (name) {
      const val = name.match(/&#\d+;/) ? name.match(/&#\d+;/)[0] : false; // need to check whether it is an actual symbol code
      if (val) {
        const num = val.match(/\d+;/) ? val.match(/\d+;/)[0] : false; // if symbol, then get numeric code
        if (num) {
          final = num.replace(/;/g, "");
        }
      }
      if (final) {
        name = name.replace(/&#\d+;/g, String.fromCharCode(final));
      }
    }
    return name;
  }
  