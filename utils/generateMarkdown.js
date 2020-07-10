
module.exports = {
  generateMarkdown : data => {
    if(data.email === null) data.email = "Email Not Listed";
    try {
      return `
# ${data.title} <a name="intro"></a>
#### __Author:__ ${data.username}
#### __Email:__ ${data.email}
![${data.username} Avatar](${data.avatar})
## Table Of Contents
1) [Introduction](#introduction)
2) [Description](#description)
3) [Installation](#installation)
4) [Usage](#usage)
5) [License](#license)
6) [Contributing](#contributing)
7) [Tests](#tests)
## Description <a name="description"></a>
${data.description}
## Installation <a name="installation"></a>
${data.installation}
## Usage <a name="usage"></a>
${data.usage}
        `;
      }
    catch(err) {
      console.log("Could not build the file:");
      console.log(err);
      return null;
    }
  }
};