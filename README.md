Salman Zuberi Hussain [Salman Hasan]  
 
Initializing to github 
1. Create a file 
2. ls into the directory 
3. Initialize with git init 
4. Make sure the files are added git add . 
5. Git status to check what’s going on with the file 
6. Git commit –m “First Commit” 
7. Git remote add origin  
8. Git push –u origin master  
 
 
 
Step 1  
E-Commerce [UNGUARDED] (Build out small store) 
 
Step 2 
Build out in house content app 
 
Step 3 
Build out own bank ourselves 
 
 
https://www.youtube.com/watch?v=dfoZj7DPSAs 
 
Services being used 
MongoDB [A database to store user authentication] 
Amazon Cloud Service [Linked with MongoDB, have options such as google]  
Nodemailer Receiving the emails/Sending the emails 
 
Packages being installed 
react-native-web@~0.19.6 react-dom@18.2.0 - Web and React-Dom [Used for web] 
Body-parser- Request body parts [Code] before handling code. Middleware is software that lies be the applications running on it 
JSONWebToken- Token to store data  
Express- Minimum framework for NodeJS minimalist web framework 
Mongoose- Creates a connection between MongoDB and node.js 
JsonWebToken-Digitally signing tokens 
Cross-Origin Resource Sharing-Makes third parties accessible in coding 
 
 
Steps 
1. npx create-expo-app  
2. npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0 
[This starts react native web] 
3. Add file components to project 
4. Create new folder api 
5. Search for MongoDB and search for mongodb 
6. Create a new folder and use free database server with amazon server  
7. Create an API Folder [Client-> Internet -> Goes to API -> Goes to Server] 
What is an API- A set of protocols that allow different software applications to communicate and exchange data 
8. NPM Init [initializes the data structures required by the rest of the computation of the aggregate] 
9. Press enter and what you receive is a package.json file 
10.Add a bunch of dependencies [Yarn add body-parser express mongoose jsonwebtoken nodemailer nodemon cors]  
11. Create a file in index.js (Express, bodyParser, Mongoose, Crypto, NodeMailer) [App,Port, Cors] 
12. Add index.js [Const express,bodyparser, mongoose,crypto, nodemailer] 
13. Add information that is necessary [Const app = express(); const port = 8000; const cors = require(‘cors”) 
14.Creating instances- When a computer system creates a new context based on a pre-existing model or scheme App.use(cors()); 
15.app.use(bodyParser.urlencoded({extended:false})); 
16.app.use(bodyParser.json()); 
17.Add const.jwt = require(“jsonwebtoken”); //add token 
 
 
Connect mongodb base to the backend of the api 
18. MongoDB for VSCode and go to connect to Cluster0 
19. Mongoose.connect is going to connect the backend [Add the URL] 
20. useNewUrlParser, useUnifiedTopology | True 
useNewUrlParser: Set to true to use the new MongoDB connection string parser.useUnifiedTopology: Set to true to use the new Server Discovery and Monitoring engine 
21. .then and then .catch error [console.log(“Error connecting to MongoDB”, err] (.Then and then.catch) 
22. App.listen(port,() => { 
	console.log (“Server is running on port 8000”)  
}) 
The bind and listen connects the specified host and port 
23. “start”: “nodemon index.js”, helps with the speedy development of Node. js applications 
24.  Yarn start 
 
Initialize Navigation and Login Screen and Register Screen [Expecting no use of 2fa and lagging system] 
1.Create LoginScreen and RegisterScreen in the ECommerce app 
2.Install ES7 + React 
3.Have to install React Navigation to change the screens 
4.Yarn add @react-navigation/native [Adding navigation] 
5. npx expo install react-native-screens react-native-safe-area-context;    
6. npm install @react-navigation/native-stack 
7. Yarn add @react-navigation/bottom-tabs [Adds bottom tabs] 
8. Navigation and add stack navigator to make apps go to another page 
9. Const stack = createStackNavigator(); 
10.Import createNativeStackNavigator 
11. Import LoginScreen into stack screen 
12. Import RegisterScreen into stack screen 
13. Remove everything from the app.js file, remove everything from file stackNavigator 
14. Yarn add @react-navigation/native-stack 
15. StackNavigator  
16. Options={{headerShown: false}} 
17. Make sure to add SafeAreaView to render content within the safe area boundaries of a device 
18. KeyboardAvoidingView <View> <Text></Text></View> Provides a view that moves out of the way of virtual keyboard automatically 
19.LoginScreen <Text> Login </Text> 
20. FontSize: 17, fontWeight: “bold”, marginTop: 12, color”#041E42” 
21. SafeAreaView add to react-native 
22. <SafeAreaView style={{flex:1, backgroundColor:”white”, alignItems:”center}}> 
23.Add a view style 
24. Add View style again to the file to add more input [Email and password] 
25. Copy paste the input  
 
 
 
Important notes for react native project 
<App.js> (Main build using stacknavigator)
 
 
 
