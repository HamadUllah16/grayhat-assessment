## Questions & Answers

Question-1: How would you approach designing/evaluating the screens? Can you share some thinking material?
Answer: I would keep it user-centric. As long as the design accomplishes user requirement, it can be evaluated as a good design. The design provided has good aspects since it is a mobile first design, and has consistency in the components. Though missing the bottom navigation.

Question-2: How would you approach setting up the project?
Answer: I would be setting up the project based on the available technological skill-set that aligns with the project requirements. So my approach would involve:
###### Frontend
- NextJS - Since it fills the voids of React plus React docs itself recommend using a framework.
- ShadCN - Simple, flexible and highly customizable components.

###### Backend
- Express
- MongoDB



## Running the app

##### Note
Make sure you have the backend running, [Backend](https://github.com/HamadUllah16/grayhat_assessment_server). Just follow the README

1. Install all dependencies:

```bash
npm install
```

2. Create a .env and add:
```bash
NEXT_PUBLIC_ENDPOINT=http//localhost:3000/api
//or whatever your server address is
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) if the backend is running else [http://localhost:3000](http://localhost:3000).
