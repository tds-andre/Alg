package kmeans_server.web;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Controller
public class AppController  extends WebMvcConfigurerAdapter {
	@RequestMapping(value="/upload/{fileID}", method=RequestMethod.POST)
    public @ResponseBody String handleFileUpload(HttpServletRequest request, @PathVariable long fileID){        
		//if (!file.isEmpty()) {
            try {            	
            	
            	String filename = "nome";
                byte[] bytes = null;
                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(filename)));
                stream.write(bytes);
                stream.close();
                return "success";
            } catch (Exception e) {
                return "You failed to upload. "+ e.getMessage();
            }
        //} else {
        //    return "You failed to upload because the file was empty.";
        //}
    }
	
}
