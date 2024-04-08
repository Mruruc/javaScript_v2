const images={
    list:[],
    contains:function(title){
        for (const iterator of this.list) {
            if(iterator.title === title){
                return true;
            }
        }
        return false;
    },
    add:function(title,artist,date){
        const image={
            title,
            artist,
            date
        };
        this.list.push(image);
       // list.push({title,artist,date});
    },
    show:function(){
        this.list.forEach(image=>console.log(image));
    },
    edit:function(title,artist,date){
        for (const iterator of this.list) {
            if(iterator.title === title){
                iterator.artist=artist;
                iterator.date=date;
                return;
            }
        }

    },
    delete:function(title){
        this.list=this.list.filter(image=> image.title != title);
        /*
       let imageToBeDeleted=this.list.find(image=>image.title==title);
       let index=this.list.indexOf(imageToBeDeleted);
       this.list.splice(index,1);
       */
    },
    clear:function(){
        this.list=[];
    }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
console.log(images.contains('Mona Lisa'));
images.delete('Mona Lisa');
// images.clear();
images.edit('Mona Lisa','Qoli',2025);
images.show();



/**
 * Removes elements from an array and, if necessary, inserts new elements in their place,
 *  returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@param items — Elements to insert into the array in place of the deleted elements.

@returns — An array containing the elements that were delete
 */

