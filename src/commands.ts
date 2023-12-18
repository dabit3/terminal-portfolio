import command from '../config.json' assert {type: 'json'};

const REPO_LINK = command.repoLink;

const defaultObj = {
  "message": [
    "<br>",
    "COMMAND NOT FOUND",
    "Type <span class='command'>'help'</span> to get started.",
    "<br>",
  ]
}

const whoamiObj = {
  "message" : [
    [
      "In the kaleidoscope of existence,",
      "I am but a reflection questioning the enigma - "
    ],
    [
      "Amidst cosmic whispers,",
      "I navigate the maze of self-discovery,",
      "echoing the eternal refrain - "
    ],
    [
      "In the symphony of life,",
      "I am a note inquiring its own melody,",
      "harmonizing with the universal query - ",
    ],
    [
      "As stardust contemplating its journey,",
      "I ponder the cosmic query,",
      "silently asking - ",
    ],
    [
      "In the tapestry of reality,",
      "I am the thread of self-inquiry,",
      "weaving through the eternal question - "
    ],
    [
      "In the tapestry of time,",
      "I weave threads of thought,",
      "exploring the intricate dance of destiny - ",
    ],
    [
      "Amidst the ocean of stars,",
      "I sail the vessel of my soul,",
      "charting courses through celestial dreams - "
    ],
    [
      "Beneath the veil of reality,",
      "I peer into the abyss of the unknown,",
      "seeking truths in the shadows of mystery - "
    ],
    [
      "In the labyrinth of consciousness,",
      "I wander with purpose,",
      "deciphering the enigma of my own being - "
    ],
    [
      "As a composer of silence,",
      "I orchestrate the symphony of my thoughts,",
      "playing the music of the inner self - "
    ],
    [
      "In the garden of the universe,",
      "I bloom with curiosity,",
      "nurturing seeds of wisdom in the soil of experience - "
    ]
  ],
}

const helpObj = {
  "commands": [
    [
    "'about'",
    "Who is Nader?",
    ],
    [
      "'projects'",
      "Maybe there's something interesting."
    ],
    [
      "'whoami'",
      "A perplexing question."
    ],
    ["'sudo'",
      "???"
    ],
    [
      "'repo'",
      "View the Github Repository."
    ],
    ["'banner'",
      "Display the banner."
    ],
    [
      "'clear'",
      "Clear the terminal."
    ],
    [
      "'home'",
      "Go back to nader.codes."
    ]
  ],
}

const createProject = () : string[] => {
  let string = "";
  const projects : string[] = [];
  const files = `${command.projects.length} File(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>")

  command.projects.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(30 - ele[0].length);
    string += ele[1];
    projects.push(string);
    string = '';
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");
  return projects
}

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  command.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    
    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });  
  banner.push("<br>");
  banner.push("Welcome to WebShell v1.0.0");
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  banner.push(`Type <span class='command'>'repo'</span> to view the GitHub repository or click <a href='${command.repoLink}' target='_blank'>here</a>.`);
  banner.push("<br>");
  return banner;
}

const createDefault = () : string[] => {
  const defaultMsg : string[] = [];

  defaultObj.message.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

/*
this function will not be assigned to a variable
it's used to create random whoami messages
*/
const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  })

  whoami.push("<br>");

  return whoami
}

const createAbout = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  const SUBSTACK = "Substack";
  const YOUTUBE = 'Youtube';
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i style="margin-left:2px;margin-right:-2px;" class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  const substack = `<i style="margin-left: 2px; margin-right:1px;"  class='fa-solid fa-bookmark'></i> ${SUBSTACK}`;
  const youtube = `<i style="margin-right:-2px;" class='fa-brands fa-youtube'></i> ${YOUTUBE}`;
  let string = "";

  about.push("<br>");
  about.push(command.aboutGreeting);
  about.push("<br>");
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(30 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(30 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += substack;
  string += SPACE.repeat(30 - SUBSTACK.length);  
  string += `<a target='_blank' href='https://substack.com/@${command.social.substack}'>substack/@${command.social.substack}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += youtube;
  string += SPACE.repeat(30 - YOUTUBE.length);  
  string += `<a target='_blank' href='https://youtube.com/${command.social.youtube}'>youtube/${command.social.youtube}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(30 - LINKEDIN.length);  
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  about.push(string);

  about.push("<br>");
  return about
}

const createHelp = () : string[] => {
  const help : string[] = []
  help.push("<br>")

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(30 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.")
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.")
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.")
  help.push("<br>")
  return help
}

const BANNER = createBanner();
const DEFAULT = createDefault();
const HELP = createHelp();
const ABOUT = createAbout();
const PROJECTS = createProject();

export { BANNER, DEFAULT, HELP, ABOUT, PROJECTS, REPO_LINK, createWhoami as WHOAMI } 
