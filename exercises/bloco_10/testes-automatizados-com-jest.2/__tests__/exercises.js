const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Exercício 1 - callback (done)', () => {
  it('uppercase - test, callback', (done) => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
    });
  });
})

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Exercício 2 - promise (then+catch)', () => {
  it('check if userID 4 exists', () => {
    expect.assertions(1);
    return getUserName(4).then(data => expect(data).toEqual('Mark'));
  });

  it('check if userID 8 does not exists', () => {
    expect.assertions(1);
    return getUserName(8).catch(error => 
      expect(error).toEqual({ error: 'User with 8 not found.' })
    );
  });
})

describe('Exercício 3 - promise (async+await+try+catch)', () => {
  it('check if userID 4 exists', async () => {
    expect.assertions(1);
    const data = await getUserName(4);
    expect(data).toEqual('Mark');
  });

  it('check if userID 8 does not exists', async () => {
    expect.assertions(1);
    try {
    const data = await getUserName(8)
    } catch (error) {
      expect(error).toEqual({ error: 'User with 8 not found.' })
    }
  });
})


const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};


describe('Exercício 4 - fetch', () => {
  it('check if apiGithub contain sd01 project todo list && meme generator', async () => {
    expect.assertions(2);
    const data = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(data).toContain('sd-01-week4-5-project-todo-list');
    expect(data).toContain('sd-01-week4-5-project-meme-generator');
  });
});


// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

describe('Exercício 5 - guess the result', () => {
  it('myGuess', async () => {
  // 1 - beforeEach
  // 1 - test
  // 1 - afterEach
  // 2 - beforeEach
  // 2 - test
  // 2 - afterEach
  });

  it('result', async () => {
  // 1 - beforeEach
  // 1 - test
  // 1 - afterEach
  // 1 - beforeEach
  // 2 - beforeEach
  // 2 - test
  // 2 - afterEach
  // 1 - afterEach
  });
});


const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const search = Animals.find((animal) => animal.name === name);
      if (search) {
        return resolve(search)
      }
      return reject({ error: 'Nenhum animal com esse nome!'})
    }, 100);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name)
  .then(list => list)
};

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const search = Animals.find((animal) => animal.age === age);
      if (search) {
        return resolve(search)
      }
      return reject({ error: 'Nenhum animal com essa idade!'})
    }, 100);
  })
);

const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
  .then(list => list)
};

describe('Exercício 6 - Testando promise - findAnimalByName', () => {
  describe('6.1 Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', async () => {
        expect.assertions(1);
        const result = await getAnimal('Dorminhoco');
        expect(result).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  
  describe('6.1 Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      try {
        const result = await getAnimal('Bob');
      } catch (error) {
        expect(error).toEqual({ error: 'Nenhum animal com esse nome!' })
      };
    });
  });

  describe('6.2 Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', async () => {
      expect.assertions(1);
      const result = await getAnimalByAge(5);
      expect(result).toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
    });
  });

  describe('6.2 Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      try {
        const result = await getAnimalByAge(8);
      } catch (error) {
        expect(error).toEqual({ error: 'Nenhum animal com essa idade!' })
      };
    });
  });
});


