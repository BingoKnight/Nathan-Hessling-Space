import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardContainer from "../components/CardContainer";

export default () => {

    const techCardList = [
        {
            title: 'React',
            image: '/static/images/react_logo.png',
            url: 'https://reactjs.org/'
        },
        {
            title: 'Gatsby',
            image: '/static/images/gatsby_logo.png',
            url: 'https://www.gatsbyjs.com/'
        },
        {
            title: 'Django',
            image: '/static/images/django_logo.png',
            url: 'https://www.djangoproject.com/'
        },
        {
            title: 'Elastic Beanstalk',
            image: '/static/images/eb_logo.png',
            url: 'https://aws.amazon.com/elasticbeanstalk/'
        },
        {
            title: 'CloudFront',
            image: '/static/images/cloudfront_logo.png',
            url: 'https://aws.amazon.com/cloudfront/'
        },
        {
            title: 'S3',
            image: '/static/images/s3_logo.png',
            url: 'https://aws.amazon.com/s3/'
        },
        {
            title: 'Route53',
            image: '/static/images/route53_logo.png',
            url: 'https://aws.amazon.com/route53/'
        },
        {
            title: 'EC2',
            image: '/static/images/ec2_logo.png',
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

                <ul className={'content-list'}>
                    <li><a href={'https://reactjs.org/'}>React</a></li>
                    <li><a href={'https://www.gatsbyjs.com/'}>Gatsby</a></li>
                    <li><a href={'https://www.djangoproject.com/'}>Django</a></li>
                    <li>
                        <a href={'https://aws.amazon.com/'}>AWS</a>
                        <ul>
                            <li><a href={'https://aws.amazon.com/elasticbeanstalk/'}>Elastic Beanstalk</a></li>
                            <li><a href={'https://aws.amazon.com/cloudfront/'}>CloudFront</a></li>
                            <li><a href={'https://aws.amazon.com/s3/'}>S3</a></li>
                            <li><a href={'https://aws.amazon.com/route53/'}>Route53</a></li>
                            <li><a href={'https://aws.amazon.com/ec2/'}>EC2</a></li>
                        </ul>
                    </li>

                </ul>

                <CardContainer>
                    {
                        techCardList.map(card =>
                            <Card backgroundImage={card.image} url={card.url}>
                                {card.title}
                            </Card>
                        )
                    }
                </CardContainer>
            </p>
        </Layout>
    )
}