import React from 'react';
import { Fade, Stagger } from 'react-animation-components';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import '../css/FeaturedComponent.css';

function RenderList({ blog, index }) {

  if (index & 1){
    return (
      <div className='row d-flex align-items-stretch ' >
        <div className='image col-lg-4 col-12'>
          <img clasname="image-check" src={blog.image} alt='...' loading="lazy"/>
        </div>
        <div className='text col-lg-8 col-12'>
          <div className='text-inner d-flex align-items-center'>
            <div className='content'>
              <header className='post-header'>
                <div className='category'>
                  <a href={blog.type}>{blog.type}</a>
                </div>
                <a href={`${blog.type}/${blog.articleid}`}>
                  <h2 className='h4'>{blog.title}</h2>
                </a>
              </header>
              <p>{blog.description}</p>
              <footer className='post-footer d-flex align-items-center'>
                <a
                  href={blog.link}
                  className='author d-flex align-items-center flex-wrap'
                  target='_blank'
                >
                  <div className='avatar'>
                    <img
                      src={blog.userProfile}
                      alt='...'
                      className='img-fluid'
                    />
                  </div>
                  <div className='title'>
                    <span>{blog.user}</span>
                  </div>
                </a>
                <div className='date  d-none d-md-block'>
                  <ScheduleIcon style={{fontSize:15}}/>{' '}
                  {blog.date}
                </div>
                <div className='comments '>
                <ChromeReaderModeIcon style={{fontSize:15}}/>{' '}{blog.time}
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else
    return (
      <div className='row d-flex align-items-stretch ' >
        <div className='text col-lg-8 col-12'>
          <div className='text-inner d-flex align-items-center'>
            <div className='content'>
              <header className='post-header'>
                <div className='category'>
                  <a href={blog.type}>{blog.type}</a>
                </div>
                <a href={`${blog.type}/${blog.articleid}`}>
                  <h2 className='h4'>{blog.title}</h2>
                </a>
              </header>
              <p>{blog.description}</p>
              <footer className='post-footer d-flex align-items-center'>
                <a
                  href={blog.link}
                  className='author d-flex align-items-center flex-wrap'
                  target='_blank'
                >
                  <div className='avatar'>
                    <img
                      src={blog.userProfile}
                      alt='...'
                      className='img-fluid'
                    />
                  </div>
                  <div className='title'>
                    <span>{blog.user}</span>
                  </div>
                </a>
                <div className='date d-none d-md-block '>
                <ScheduleIcon style={{fontSize:15}}/>
                 {' '} {blog.date}
                </div>
                <div className='comments '>
                <ChromeReaderModeIcon style={{fontSize:15}}/>{' '}
                  {blog.time}
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div className='image col-lg-4 col-12'>
          <img src={blog.image} alt='...' loading="lazy" />
        </div>
      </div>
    );
}

function Featured(props) {
  return (
    <section className='featured-posts no-padding-top mt-5 '>
      <div
        className='container gradient-border'
        style={{ fontFamily: 'Ubuntu,sans-serif' }}
      >
        <Stagger in>
          {props.featured.map((item, index) => (
            <Fade key={item.id}>
              <RenderList blog={item} index={index} />
            </Fade>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default Featured;
