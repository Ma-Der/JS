const surnames = 'Nowak Olejniczak Pająk Matuszewski Romanowski Kasprzak Świątek Wilczyński Ratajczak Kurowski Michalik Owczarek Orzechowski Grzelak Łukasik Olejnik Sobolewski Rogowski Mazurkiewicz Barański Bukowski Matusiak Sroka Kosiński Kędzierski Skowroński Marcinkowski Sobczyk Kozieł Marszałek Zych Chrzanowski Bednarski Rybak Lisowski Bednarz Janiszewski Pluta Kasprzyk Muszyński Kwiecień Kuczyński Świderski Paluch Morawski Białek Grzybowski Witek Turek Marczak Jędrzejewski Osiński Marzec Chmiel Czajka Kaczor Małek Kubicki Krzemiński Żukowski Piekarski Michałowski Szczęsny Szydłowski Biernacki Śliwa Janowski Stefaniak Lech Przybysz Lewicki Gołębiewski Murawski Dębski Kulesza Popławski Staniszewski'.split(
  ' '
);
const names = 'Ada, Adela, Adelajda, Adrianna, Agata, Agnieszka, Aldona, Aleksandra, Alicja, Alina, Amanda, Amelia, Anastazja, Andżelika, Aneta, Anita, Anna, Antonina, Adam, Adolf, Adrian, Albert, Aleksander, Aleksy, Alfred, Amadeusz, Andrzej, Antoni, Arkadiusz, Arnold, Artur'.split(
  ', '
);
const countries = ['PL', 'UK', 'USA'];

export function generateHuman() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomPhoneNumber(array) {
    for (let i = 0; i < 9; i++) {
      array.push(randomNumber(0, 9));
    }
    return array.join('');
  }

  const getRandomElementFromArray = (array) => {
    let num = randomNumber(0, array.length - 1);
    return array[num];
  };

  const name = getRandomElementFromArray(names)
  const surname = getRandomElementFromArray(surnames)

  const human = {
    id: uuidv4(),
    name,
    surname,
    email: `${name.toLowerCase()}.${surname.toLowerCase()}@mail.com`,
    age: randomNumber(18, 85),
    phoneNr: randomPhoneNumber([]),
    country: getRandomElementFromArray(countries),
  };
  return JSON.stringify(human);
}
