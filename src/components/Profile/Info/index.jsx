import React from 'react';

import styles from './Info.module.sass';

import bgBanner from '../../../images/bg-image.jpg';
import user from '../../../images/user.svg';

const Info = () => {
    return (
        <section className={styles.profile}>
            <div className={styles.banner} style={{backgroundImage: `url(${bgBanner})`}}></div>
            <div className={styles.profile_info}>
                <div width="120" className={styles.profile_photoWrap}>
                    <img width="120" src={user} alt="" className={styles.profile_photo} />
                </div>
                <div className={styles.profile_name}>Ilez E.</div>
                <div className={styles.profile_nickname}>@ileze</div>
                <div className={styles.profile_descr}>
                    <p className={styles.profile_descr__text}>Design and development agency that promotes innovation through elevated websites, applications, and eCommerce solutions</p>
                    <ul>
                        <li><span className={styles.profile_descr__point_name}>Date of Birth: </span><span className={styles.profile_descr__point_text}>12.11.2015</span></li>
                        <li><span className={styles.profile_descr__point_name}>City: </span><span className={styles.profile_descr__point_text}>Nazran</span></li>
                        <li><span className={styles.profile_descr__point_name}>Education: </span><span className={styles.profile_descr__point_text}>MIT</span></li>
                        <li><span className={styles.profile_descr__point_name}>Web Site: </span><span className={styles.profile_descr__point_text}>ilez-e06.ru</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Info;