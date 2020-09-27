const surnames = 'Nowak Olejniczak Pająk Matuszewski Romanowski Kasprzak Świątek Wilczyński Ratajczak Kurowski Michalik Owczarek Orzechowski Grzelak Łukasik Olejnik Sobolewski Rogowski Mazurkiewicz Barański Bukowski Matusiak Sroka Kosiński Kędzierski Skowroński Marcinkowski Sobczyk Kozieł Marszałek Zych Chrzanowski Bednarski Rybak Lisowski Bednarz Janiszewski Pluta Kasprzyk Muszyński Kwiecień Kuczyński Świderski Paluch Morawski Białek Grzybowski Witek Turek Marczak Jędrzejewski Osiński Marzec Chmiel Czajka Kaczor Małek Kubicki Krzemiński Żukowski Piekarski Michałowski Szczęsny Szydłowski Biernacki Śliwa Janowski Stefaniak Lech Przybysz Lewicki Gołębiewski Murawski Dębski Kulesza Popławski Staniszewski'.split(
  ' '
);

const names = 'Ada, Adela, Adelajda, Adrianna, Agata, Agnieszka, Aldona, Aleksandra, Alicja, Alina, Amanda, Amelia, Anastazja, Andżelika, Aneta, Anita, Anna, Antonina, Adam, Adolf, Adrian, Albert, Aleksander, Aleksy, Alfred, Amadeusz, Andrzej, Antoni, Arkadiusz, Arnold, Artur'.split(
  ', '
);

const countries = ['PL', 'UK', 'USA'];

export function generateHuman() {
  function Human() {
    this.name = randomName();
    this.surname = randomSurname();
    this.email =
      this.name.toLowerCase() + '.' + this.surname.toLowerCase() + '@mail.com';
    this.age = randomNumber(18, 85);
    this.phoneNr = randomPhoneNumber();
    this.country = randomCountry();
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomPhoneNumber() {
    let arr = [];
    for (let i = 0; i < 9; i++) {
      arr[i] = randomNumber(0, 9);
    }
    return arr.join('');
  }

  function randomSurname() {
    let num = randomNumber(0, surnames.length - 1);
    return surnames[num];
  }

  function randomName() {
    let num = randomNumber(0, names.length - 1);
    return names[num];
  }

  function randomCountry() {
    let num = randomNumber(0, countries.length - 1);
    return countries[num];
  }
  return new Human();
}
