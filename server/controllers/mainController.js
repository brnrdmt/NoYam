/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
    const locals = {
      title: "Noyam",
      description: "Notes untuk Anayam",
    }
    res.render('index', {
      locals,
      layout: '../views/layouts/front-page'
    });
  }
  
  
  /**
   * GET /
   * About 
  */
  exports.about = async (req, res) => {
    const locals = {
      title: "About - Noyam",
      description: "Komposisi Noyam",
    }
    res.render('about', locals);
  }