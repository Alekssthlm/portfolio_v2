import { TypeAnimation } from 'react-type-animation';

type TypingAnimationProps = {
  text: string,
  delay: number
};


export default function AnimatedText({ text, delay }: TypingAnimationProps) {
  return (
    <TypeAnimation
      sequence={[
        `${text}`, 
        delay,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: 'inline-block' }}
    />
  )
}





