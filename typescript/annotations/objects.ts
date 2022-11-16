const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  // ES2015
  setAge(age: number): void {
    // profile.age = 25;
    this.age = age;
  },
};

// jei norima naudoti destructuring reikia naudoti tinkama struktura kaip apacioje
const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
