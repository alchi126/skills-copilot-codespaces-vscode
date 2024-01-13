function skillsMember() {
  const skills = document.querySelectorAll('.skill');
  const skillsBar = document.querySelectorAll('.skill__bar');

  skills.forEach((skill, index) => {
    skill.addEventListener('mouseover', () => {
      skillsBar[index].classList.add('active');
    });

    skill.addEventListener('mouseout', () => {
      skillsBar[index].classList.remove('active');
    });
  });
}