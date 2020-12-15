import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardContainer from "../components/CardContainer";

export default () => {
    const techCardList = [
        {
            title: 'React',
            image: '/images/react_logo.png',
            url: 'https://reactjs.org/'
        },
        {
            title: 'Gatsby',
            image: '/images/gatsby_logo.png',
            url: 'https://www.gatsbyjs.com/'
        },
        {
            title: 'Django',
            image: '/images/django_logo.png',
            url: 'https://www.djangoproject.com/'
        },
        {
            title: 'Elastic Beanstalk',
            image: '/images/eb_logo.png',
            url: 'https://aws.amazon.com/elasticbeanstalk/'
        },
        {
            title: 'CloudFront',
            image: '/images/cloudfront_logo.png',
            url: 'https://aws.amazon.com/cloudfront/'
        },
        {
            title: 'S3',
            image: '/images/s3_logo.png',
            url: 'https://aws.amazon.com/s3/'
        },
        {
            title: 'Route53',
            image: '/images/route53_logo.png',
            url: 'https://aws.amazon.com/route53/'
        },
        {
            title: 'EC2',
            image: '/images/ec2_logo.png',
            url: 'https://aws.amazon.com/ec2/'
        }
    ]

    return (
        <Layout>
            <h2 className={'content-header'}>Home</h2>
            <p>
                Welcome to my space on the internet, if you haven't derived from the name of the website
                or the title to the top left, my name is Nathan Hessling. I am a Software Engineer that primarily focuses
                in web development but I have dabbled in game development, AI, and some systems development. If you're
                interested in learning a little more about me feel free to head over to the About page.
            </p>
            <p>
                This website is just my sandbox on the internet to link publicize my projects or play with some new
                web technology. For example, the motivation to create this site came from learning about GatsbyJS which
                turned into the desire to create something which includes it. This website is completely from scratch in
                respect to website builders (eg. Wix, Wordpress, GoDaddy, etc) using the technologies below:


            </p>
            <CardContainer>
                {
                    techCardList.map(card =>
                        <Card backgroundImage={card.image} url={card.url}>
                            {card.title}
                        </Card>
                    )
                }
            </CardContainer>
        </Layout>
    )
}
