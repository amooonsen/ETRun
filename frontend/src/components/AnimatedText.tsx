// root component

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import AnimatedText from "./AnimatedText";
// import "./styles.css";

// export default function App() {
//   const [replay, setReplay] = useState(true);
//   // Placeholder text data, as if from API
//   const placeholderText = [
//     { type: "heading1", text: "Framer Motion" },
//     {
//       type: "heading2",
//       text: "Animating responsive text!"
//     }
//   ];

//   const container = {
//     visible: {
//       transition: {
//         staggerChildren: 0.025
//       }
//     }
//   };

//   // Quick and dirt for the example
//   const handleReplay = () => {
//     setReplay(!replay);
//     setTimeout(() => {
//       setReplay(true);
//     }, 600);
//   };

//   return (
//     <motion.div
//       className="App"
//       initial="hidden"
//       // animate="visible"
//       animate={replay ? "visible" : "hidden"}
//       variants={container}
//     >
//       <div className="container">
//         {placeholderText.map((item, index) => {
//           return <AnimatedText {...item} key={index} />;
//         })}
//       </div>
//       <button onClick={handleReplay}>
//         Replay <span>⟲</span>
//       </button>
//     </motion.div>
//   );
// }




// child component

// import React from "react";
// import { motion } from "framer-motion";

// // Word wrapper
// const Wrapper = (props) => {
//   // We'll do this to prevent wrapping of words using CSS
//   return <span className="word-wrapper">{props.children}</span>;
// };

// // Map API "type" vaules to JSX tag names
// const tagMap = {
//   paragraph: "p",
//   heading1: "h1",
//   heading2: "h2"
// };

// const AnimatedCharacters = (props) => {
//   const item = {
//     hidden: {
//       y: "200%",
//       color: "#0055FF",
//       transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
//     },
//     visible: {
//       y: 0,
//       color: "#FF0088",
//       transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
//     }
//   };

//   //  Split each word of props.text into an array
//   const splitWords = props.text.split(" ");

//   // Create storage array
//   const words = [];

//   // Push each word into words array
//   for (const [, item] of splitWords.entries()) {
//     words.push(item.split(""));
//   }

//   // Add a space ("\u00A0") to the end of each word
//   words.map((word) => {
//     return word.push("\u00A0");
//   });

//   // Get the tag name from tagMap
//   const Tag = tagMap[props.type];

//   return (
//     <Tag>
//       {words.map((word, index) => {
//         return (
//           // Wrap each word in the Wrapper component
//           <Wrapper key={index}>
//             {words[index].flat().map((element, index) => {
//               return (
//                 <span
//                   style={{
//                     overflow: "hidden",
//                     display: "inline-block"
//                   }}
//                   key={index}
//                 >
//                   <motion.span
//                     style={{ display: "inline-block" }}
//                     variants={item}
//                   >
//                     {element}
//                   </motion.span>
//                 </span>
//               );
//             })}
//           </Wrapper>
//         );
//       })}
//       {/* {} */}
//     </Tag>
//   );
// };

// export default AnimatedCharacters;
