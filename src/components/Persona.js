import React from 'react'
import CustomTextParagraph from './CustomTextParagraph';

import posts from '../data/posts';

const Persona = () => (
  <CustomTextParagraph text={posts.persona.text} />
)

export default Persona