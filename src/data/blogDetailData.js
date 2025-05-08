// src/data/blogDetailData.js
import Img1 from '../assets/img-article1.svg';
import ImgContent1 from '../assets/img-detail1.svg';
import ImgContent2 from '../assets/img-detail2.svg';
import ImgContent3 from '../assets/img-detail3.svg';


const blogDetailData = {
   
  date: "2 Apr, 2018",
  category: "Mind",
  title: "How to make the most of your childhood",
  author: "Rosie Manning",
  heroImage: Img1,
  paragraphs: [
    "People is safe to say that Extraversion and Introversion are probably the oldest notions in personality theories.",
    "It is safe to say that Extraversion and Introversion are probably the oldest notions in the history of personality theories..."
  ],
  quote: {
    text: "It is safe to say that Extraversion and Introversion are probably the oldest notions in the history of personality theories.",
    author: "Rosie Manning, Human"
  },
  contentImages: [ImgContent1, ImgContent2, ImgContent3],
  relatedArticles: [
    "Thinking Vs. Feeling",
    "Intuitive Vs. Observant",
    "Assertive Vs. Turbulent"
  ]
};


export default blogDetailData;
