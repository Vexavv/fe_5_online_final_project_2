import React from 'react';

const GoogleMap = () => {
  return (
    <div>
      <iframe
        style={{ border: 0, width: '100%', height: '590px' }}
        title={42}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20366.76076636892!2d30.484270055808945!3d50.35079453102932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c62b50a33bb1%3A0x2d1663383a9ab8f6!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INC80YPQt9C10Lkg0L3QsNGA0L7QtNC90L7RlyDQsNGA0YXRltGC0LXQutGC0YPRgNC4INGC0LAg0L_QvtCx0YPRgtGDINCj0LrRgNCw0ZfQvdC4!5e0!3m2!1suk!2sua!4v1677594961224!5m2!1suk!2sua"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
