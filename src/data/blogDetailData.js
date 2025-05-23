// src/data/blogDetailData.js
import Img1 from '../assets/img-article1.svg';
import ImgContent1 from '../assets/img-detail1.svg';
import ImgContent2 from '../assets/img-detail2.svg';
import ImgContent3 from '../assets/img-detail3.svg';


const blogDetailData = {
   
  category: "Mind",
  author: "Arindita",
  heroImage: Img1,
  paragraphs: 
    "It is safe to say that Extraversion and Introversion are probably the oldest notions in the history of personality theories...",
  quote: {
    author: "Arindita, Human"
  },
  contentImages: [ImgContent1, ImgContent2, ImgContent3],
  relatedArticles: [
    "Thinking Vs. Feeling",
    "Intuitive Vs. Observant",
    "Assertive Vs. Turbulent"
  ]
};


export default blogDetailData;
