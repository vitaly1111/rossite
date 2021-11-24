export const heandlerBurger=(openBtn,menu,openSelector)=>{
	openBtn.addEventListener('click',()=>{
		if(menu.classList.contains(openSelector)){
			menu.style.height=''
			menu.classList.remove(openSelector)
		}else{
			menu.style.height=menu.scrollHeight+'px'
			menu.classList.add(openSelector)
		}
		
	})
}
