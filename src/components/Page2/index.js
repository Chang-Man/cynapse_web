import React from 'react';
import styles from "../../styles/Page2.module.scss";
import ReactPageScroller from "react-page-scroller";

const Page2 = () => {
    return (
        <div className={styles.wrapper}>
            <ReactPageScroller>
                <div>2-1</div>
                <div>2-2</div>
            </ReactPageScroller>
           {/* ### 커뮤니티 기반 브랜드 운영

            브랜드를 만들기 위해서는 많은 시간과 비용, 그리고 다양한 역량이 필요합니다.
            기존에는 이것을 한 두 명의 소수가 하느라 시간과 돈이 많이 들었어요.

            Cynapse는 브랜드 운영에 필요한 절대적인 시간과 비용을 절감하기 위해
            다양한 역량을 가진 사람들이 함께 커뮤니티를 구성하고
            그 커뮤니티를 기반으로 브랜드를 운영해나가는
            Cynapse work room를 개설하였습니다.

            디자이너, 개발자, 마케터, MD 등의 다양한 사람들이
            하나의 상품, 하나의 브랜드를 함께 만들고
            시간과 비용을 절감해보세요.

            긱워커 시대,
            Cynapse work room에서는 패션 브랜드 창업 역시 사이드 프로젝트로 가능합니다.

            [워크룸 #2 신청하기]*/}
        </div>
    );
};

export default Page2;