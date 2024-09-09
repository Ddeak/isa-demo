## ISA-Demo

This is a small demo application, written using expo / React-Native. The aim is to allow you, the user to invest X amount into an ISA. 

### How to run

- Note: There is a soft time limit on this project, so I will be focussing on the application running only on iOS. 
- Clone the repo down onto a Mac or Macbook and ensure you have updated your environment, (MacOS v14+, Node v18.8+)
- Ensure you have installed updated xCode. Using xCode, optionally start an iPhone simulator. 
- Open a terminal to the project and run `npm i`
- Run `npm run ios` in the terminal.

### Developer Notes:

#### Initial notes:

- As mentioned in the how-to-run section above, due to a soft time limitation this application may not work on Android or Web, despite there being prompts. If it were a 'real' project I would aim to ensure it works on all environments and provide instructions for running it. 
- Similar to above, I have chosen to use `create-expo-app` in order to spin up a base native application quickly. I am sure there are potentially better ways to create a RN project.
- My goal as of starting this project, is to try to meet the basic functionality of the requirements.
  - My initial thoughts are to have something running in RN, and have the tools I need, eg navigation (React-Navigation), some form of ui to work with (Material / React-Native Paper), and consider a way to persist data to view transactions when coming back to the app. 
- Finally, with the above in mind, I do not plan to add testing for this project.

#### Things I would improve:

- Proper theming - I removed the basic theme boilerplate code that came with the expo app. In hindsight, I should have kept it and used it. 
- Create a generic 'list' component that takes in props such as text to display, and optional components on the 'right' rather than creating a new FlatList for each. 

#### Challenges:

- Expo-Router has a small learning curve. 
- For the sake of simplicity, I have opted not to do any authentication / user management, and will simply use a list of users.
- 