import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';

import { urlForImage } from '../../../../sanity/lib/image';

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

interface ModalProps {
  modal: { active: boolean; index: number };
  projects: any;
}

export default function Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX + 350);
      yMoveContainer(pageY);
    });
  }, []);

  return (
    <motion.div
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? 'enter' : 'closed'}
      className="modal-111 pointer-events-none absolute flex h-80 w-96 items-center justify-center"
    >
      {active && index !== null && projects[index].projectImage ? (
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={urlForImage(projects[index].projectImage)}
            width={300}
            height={0}
            alt="image"
            className="h-auto"
          />
        </div>
      ) : null}
    </motion.div>
  );
}