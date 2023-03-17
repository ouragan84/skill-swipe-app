import content from './skills.json';

const readTextFile = () => {
  try {
    console.log("reading from file")
    return content.skills;
  } catch (error) {
    console.error('Error reading the file:', error);
  }
}

// Call the function with the URL of your fixed file
const skillsList = readTextFile();

module.exports = {skillsList};