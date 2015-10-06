package kmeans_server.service;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;





import kmeans_server.repository.FileRepo;


@Service
public class DataService {
	@Autowired
	private FileRepo files;
	public void receiveFile(long fileID, MultipartFile file) throws IOException{
		kmeans_server.domain.File ent = files.findOne(fileID);
		
		BufferedOutputStream stream = null;
		try{			
			byte[] bytes = file.getBytes();
			File dir = new File("uploads/"+((Long)fileID).toString());
			if(!dir.exists())
				dir.mkdir();
			String filename = dir.getAbsolutePath() + "\\" + file.getOriginalFilename(); 
			stream = new BufferedOutputStream(new FileOutputStream(new File(filename)));
			stream.write(bytes);
			ent.setName(file.getOriginalFilename());
			ent.setLocation(filename);			
			files.save(ent);
		}catch(Exception e){
			if(stream!=null)
				stream.close();
			
			ent.setLocation(null);
			files.save(ent);
			throw e;
		}
		
		stream.close();
	}
}
