export default class Pagination<T>{

    public currentPage: number = 1;
    public totalPages: number;
    public itemsPerPage: number;
    public totalItems: number;
    public page: T[] = [];
    public pageButtons:(number | string)[] = [];
    private items: T[];

    constructor(itemsPerPage:number, items:T[]){
        this.items = items;
        this.itemsPerPage = itemsPerPage;
        this.setTotamItems();
        this.setItemsPerPage();
        this.updatePageButtons(1, this.totalPages);
    }

    setTotamItems(){
        this.totalItems = this.items.length;
    }

    setItemsPerPage(){
        this.totalPages = Math.floor(this.totalItems / this.itemsPerPage);
    }

    updatePageButtons(pageNumber: number, totalButtons: number){
        this.pageButtons = [];
        this.pageButtons.push(1);
        let maxIteration = 3;

        if(pageNumber + 3 >= totalButtons){
            if(totalButtons - (pageNumber + 3) < 3 ){
                let startIndex = totalButtons - 3;
                for(let i = startIndex; i <= totalButtons; i++){
                    if(i > 1){
                        this.pageButtons.push(i);
                    }
                } 
            } else {
                for(let i = pageNumber; i <= totalButtons; i++){
                    if(i > 1){
                        this.pageButtons.push(i);
                    }
                }

            }               
            } else if(pageNumber + 3 < totalButtons){
                
                for(let i = pageNumber; i <= pageNumber + 3; i++){
                    if(i > 1 ){
                        if(i === pageNumber + 3){
                            this.pageButtons.push("...");
                            this.pageButtons.push(totalButtons);
                        } else {
                            this.pageButtons.push(i);
                        }
                    }
                    
                }
            } 
    }

    getPage(pageNumber: number){
        let firstIndex = pageNumber > 1 ? this.itemsPerPage * (pageNumber -1)  : 0;
        let lastIndex = this.totalItems < firstIndex + this.itemsPerPage ? this.totalItems : firstIndex + this.itemsPerPage -1;
        this.page = [];

        for(let i = firstIndex; i <= lastIndex; i++){
            this.page.push(this.items[i]);
        }
        this.currentPage = pageNumber;
        this.updatePageButtons(pageNumber, this.totalPages);
    }

}