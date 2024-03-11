export class Sessions {
  public static getItem(key: string): any {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== undefined && storedValue !== null) {
      try {
        return JSON.parse(storedValue);
      } catch (e) {
        console.error('Error al analizar el JSON almacenado:', e)
        return storedValue;
      }
    } else {
      return null;
    }
  }

  public static setItem(key: string, value: any) {
    try {
      let jsonValue: string = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error('Error al almacenar el JSON:', e)
      localStorage.setItem(key, value);
    }
  }

  public static header() {
    let objReturn = {
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'Bearer ' + Sessions.getItem('token'),
      },
    };

    return objReturn;
  }
}
