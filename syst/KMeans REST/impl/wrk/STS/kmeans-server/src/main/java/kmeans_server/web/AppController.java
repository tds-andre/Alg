package kmeans_server.web;

import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;

import kmeans_server.services.DataService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Controller
public class AppController  extends WebMvcConfigurerAdapter {
	
	@Autowired
	DataService dataService;
	
	@RequestMapping(value = "file/{transactionLogId}/upload", method = RequestMethod.POST)
	 public  @ResponseBody ResponseEntity<Message> uploadFile(HttpServletResponse response, @RequestParam(value="file") MultipartFile file, @PathVariable long transactionLogId){	 
		HttpStatus  		responseCode = HttpStatus.OK;
   	final HttpHeaders	headers 	 = new HttpHeaders();
   	Message 			msg			 = new Message();
   	headers.setContentType(MediaType.APPLICATION_JSON); 
   	headers.setPragma("no-cache");
		headers.setCacheControl("no-cache");
		headers.setDate(0);
		
		try{
			dataService.receiveFile(transactionLogId, file);			
		}catch(Exception e){
			e.printStackTrace();
			msg.message = "You failed to upload. "+ e.getMessage();
       	responseCode = HttpStatus.INTERNAL_SERVER_ERROR;			
		}
		
		return new ResponseEntity<Message>(msg ,headers, responseCode);
	}
	
	
	@RequestMapping(value = "file/{fileId}/process", method = RequestMethod.GET)
	 public  @ResponseBody ResponseEntity<Message> uploadFile(@PathVariable long fileId){	 
		HttpStatus  		responseCode = HttpStatus.OK;
	  	final HttpHeaders	headers 	 = new HttpHeaders();
	  	Message 			msg			 = new Message();
	  	headers.setContentType(MediaType.APPLICATION_JSON); 
	  	headers.setPragma("no-cache");
		headers.setCacheControl("no-cache");
		headers.setDate(0);
		
		try{
			dataService.processFile(fileId);			
		}catch(Exception e){
			e.printStackTrace();
			msg.message = "Falha ao processar arquivo. "+ e.getMessage();
      	responseCode = HttpStatus.INTERNAL_SERVER_ERROR;			
		}
		
		return new ResponseEntity<Message>(msg ,headers, responseCode);
	}
	
	@RequestMapping(value = "clusterization/{clusterizationId}/run", method = RequestMethod.GET)
	 public  @ResponseBody ResponseEntity<Message> executeClusterization(@PathVariable long clusterizationId){	 
		HttpStatus  		responseCode = HttpStatus.OK;
	  	final HttpHeaders	headers 	 = new HttpHeaders();
	  	Message 			msg			 = new Message();
	  	headers.setContentType(MediaType.APPLICATION_JSON); 
	  	headers.setPragma("no-cache");
		headers.setCacheControl("no-cache");
		headers.setDate(0);
		
		try{
			dataService.executeClusterization(clusterizationId);			
		}catch(Exception e){
			e.printStackTrace();
			msg.message = "Falha ao processar arquivo. "+ e.getMessage();
     	responseCode = HttpStatus.INTERNAL_SERVER_ERROR;			
		}
		
		return new ResponseEntity<Message>(msg ,headers, responseCode);
	}
	
	
	@RequestMapping(value = "clusterization/{clusterizationId}/get", method = RequestMethod.GET)
	@ResponseBody
	public FileSystemResource getFile(@PathVariable long clusterizationId) {
	    return new FileSystemResource(dataService.getFile(clusterizationId)); 
	}
}
