export class Tarea{
    private selected;

    constructor(public titulo: string, public porHacer: string){}

    isSelected(): boolean{
        return this.selected;
    }

    setSelected(event: boolean): void{
        this.selected = event;
    }
}