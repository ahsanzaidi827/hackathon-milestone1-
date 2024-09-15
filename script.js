// const skillsButton = document.createElement('button');
// skillsButton.textContent = 'Show/Hide Skills';
// skillsButton.addEventListener('click', () => {
//     const skillsSection = document.getElementById('skills');
//     skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
// });

// const skillsSection = document.getElementById('skills');
// skillsSection.parentNode.insertBefore(skillsButton, skillsSection);
// document.getElementById('resume-preview').innerHTML = resumeHTML;




// // Get the resume preview element
// const resumePreviewElement = document.getElementById('resume-preview');

// // Get the generate resume button
// const generateResumeButton = document.querySelector('button[type="button"]');

// // Add an event listener to the generate resume button
// generateResumeButton.addEventListener('click', generateResume);

// // Function to generate the resume preview
// function generateResume() {
//   const personalInfoSection = document.getElementById('personal-info');
//   const educationSection = document.getElementById('education');
//   const skillsSection = document.getElementById('skills');
//   const workExperienceSection = document.getElementById('work-experience');

//   // Create the resume preview HTML content
//   let resumeHTML = `
//     <h2>Personal Information</h2>
//     <p>Name: ${personalInfoSection.querySelector('p:nth-child(1)').textContent}</p>
//     <p>Email: ${personalInfoSection.querySelector('p:nth-child(2)').textContent}</p>
//     <p>Phone: ${personalInfoSection.querySelector('p:nth-child(3)').textContent}</p>
//     <p>LinkedIn: ${personalInfoSection.querySelector('p:nth-child(4) a').textContent}</p>

//     <h2>Education</h2>
//     <p>${educationSection.querySelector('h3').textContent}</p>
//     <p>${educationSection.querySelector('p:nth-child(1)').textContent}</p>
//     <p>${educationSection.querySelector('p:nth-child(2)').textContent}</p>

//     <h2>Skills</h2>
//     <ul>
//       ${skillsSection.querySelectorAll('li').map((li) => `<li>${li.textContent}</li>`).join('')}
//     </ul>

//     <h2>Work Experience</h2>
//     <p>${workExperienceSection.querySelector('h3').textContent}</p>
//     <p>${workExperienceSection.querySelector('p:nth-child(1)').textContent}</p>
//     <p>${workExperienceSection.querySelector('p:nth-child(2)').textContent}</p>
//     <ul>
//       ${workExperienceSection.querySelectorAll('li').map((li) => `<li>${li.textContent}</li>`).join('')}
//     </ul>
//   `;

//   // Set the resume preview HTML content
//   resumePreviewElement.innerHTML = resumeHTML;
// }

// // Add the show/hide skills button functionality (your existing code)
// const skillsButton = document.createElement('button');
// skillsButton.textContent = 'Show/Hide Skills';
// skillsButton.addEventListener('click', () => {
//   const skillsSection = document.getElementById('skills');
//   skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
// });

// const skillsSection = document.getElementById('skills');
// skillsSection.parentNode.insertBefore(skillsButton, skillsSection);






// script.js
function toggleSkillsSection() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection.style.display === 'block') {
      skillsSection.style.display = 'none';
    } else {
      skillsSection.style.display = 'block';
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills-button');
    toggleButton.addEventListener('click', toggleSkillsSection);
  });




