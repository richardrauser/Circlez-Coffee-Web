import React from 'react';
import { Button } from 'react-bootstrap'
import Image from 'next/image';
import tickIcon from '../public/tick.svg';
import lockIcon from '../public/lock.svg';
import styles from '../styles/Achievement.module.css';

type AchievementProps = {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  locked: boolean;
  actionLink: string;
  actionText: string
  rewardLink: string;
  rewardText: string;
}

export default function Achievement(props: AchievementProps) {
  const { imageSrc, altText, title, description, locked, actionLink, actionText, rewardLink, rewardText } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={altText} width={200} height={200} />
      </div>
      <div className={styles.textContainer}>
        <h2>
          <span className={styles.statusSpan}>
            <Image src={ locked ? lockIcon : tickIcon} width={24} height={24} className={styles.statusIcon} alt="tick" />
          </span>
          {title}
        </h2>
        <p>{description}</p>
        <Button target="_blank" href={locked ? actionLink : rewardLink} className={!locked ? styles.unlocked: styles.locked}>{locked ? actionText : rewardText}</Button>
      </div>
    </div>
  );
}
