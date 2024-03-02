console.log('bobbyhadz.com');

// ✅ Correctly defined function
function sum(a, b) {
  return a + b;
}

// -------------------------------------------------

// ✅ Make sure you don't have extra brackets
const arr = [1, 2, 3];

// -------------------------------------------------

// ✅ Make sure you don't have missing commas.

const obj = {
  name: 'bobby', // ✅ Fixed
  age: 30,
};

// -------------------------------------------------

// ✅ Make sure you don't have missing quotes

const str = 'bobbyhadz.com'; // ✅ Fixed

// -------------------------------------------------

// ✅ Make sure to use fetch correctly

async function getUser() {
  try {
    const response = await fetch('https://randomuser.me/api/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

getUser().then(data => {
  console.log(data);
});
