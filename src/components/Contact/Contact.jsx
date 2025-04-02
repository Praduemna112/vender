import React from 'react'

const Contact = () => {
  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '16px',
    },
    formWrapper: {
        width: '100%',
        maxWidth: '1024px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '20px',
    },
    iframe: {
        width: '100%',
        height: '955px',
        border: 'none',
    }
  };

  return (
    <div className="w-full font-medium">
      <div className="relative">
        <div className="h-[10vh] md:h-[20vh]">
          <div className="absolute inset-0 bg-red-400 opacity-80"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-[10vh] md:h-[30vh] text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">May I help You</h1>
          <div className="w-full h-20 bg-gradient-to-r from-red-700 to-transparent rounded-tl-full rounded-tr-full mt-8"></div>
        </div>
      </div>
      
      <div style={styles.container}>
        <div style={styles.formWrapper}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe80A5HFnin0RaoGiUM5qtMK17H3gMDtYknxanBQlVj_D_MNg/viewform?embedded=true"
            style={{ width: '100%', height: '1500px', border: 'none' }}
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;
