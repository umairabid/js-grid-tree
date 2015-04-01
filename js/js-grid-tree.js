function GridTree(data){
  this.wrapper = data.wrapper;
  this.contacts = data.contacts;
  this.init();
  this.rows;
  this.cols;
}

GridTree.prototype = {
  init: function(){
    this.cols = 0;
    this.rows = 0;
    var row = this.insertRow();
    var col = this.insertColumn(row);
    this.insertNode(col, this.contacts);
  },

  insertChildren: function(leave){
    var count = leave.children.length % 2 == 0 ? leave.children.length : leave.children.length - 1;
    var leave_row = $('#node-'+leave.id).closest('.row');
    var row_index = leave_row.attr('id').replace( /^\D+/g, '');
    var leave_col = $('#node-'+leave.id).closest('.col');
    var col_index = leave_col.attr('id').replace( /^\D+/g, '');

    for(i = 1 ; i <= this.rows; i++){
      var row = $('#row-'+i);
      var parallelCol = $('#row-'+i+' #col-'+col_index);
      for(j = 1 ; j <= count/2 ; j++){
        this.insertAdjacentColumn(parallelCol, true);
        this.insertAdjacentColumn(parallelCol, false);
      }
      this.refreshRowColsIndexes(row);
    }

    var next_index = parseInt(row_index)+1;
    if($('#row-'+next_index).length == 0)
      var new_row = this.insertRow();
    else
      new_row = $("#row-"+next_index)

    var max_cols = leave_row.prop('children').length;

    var limit =  $('#row-'+1).prop('children').length - new_row.prop('children').length;
    for(i = 0 ; i < limit ; i++){
      this.insertColumn(new_row, true);
    }

    col_index = leave_col.attr('id').replace( /^\D+/g, '');
    var first_col_index = col_index - (count/2);
    row_index++;

    for(var i=0 ; i < leave.children.length ; i++){
      var col = $('#row-'+row_index+' #col-'+first_col_index);
      first_col_index++;
      this.insertNode(col, leave.children[i]);
    }

    leave_col.attr('data-expanded', 'true');
    leave_col.attr('has-children', 'true');
    this.connectNodes(this.contacts);
  },

  insertNode: function(col, leave){
    var that = this;
    var node = document.createElement('div');
    $(node).addClass('node active');
    $(node).attr('id', 'node-'+leave.id);
    var link = document.createElement('a');
    $(link).attr('href', 'javascript:void(0)');
    $(link).html(leave.name);
    $(link).click(function(e){
      if(leave.children.length > 0 && col.attr('data-expanded') != 'true'){
        that.insertChildren(leave);
      }
    })
    $(node).html(link);

    col.append(node);

  },

  insertColumn: function(row){
    this.cols++;
    var col = document.createElement('div');
    $(col).addClass('col');
    $(col).attr('id', 'col-'+this.cols);
    row.append(col);
    return $(col);
  },

  insertAdjacentColumn: function(column, after){
    this.cols++;
    var col = document.createElement('div');
    $(col).addClass('col');
    $(col).attr('id', 'col-'+this.cols);
    after == true ? column.after(col) : column.before(col);
    return $(col);
  },

  insertRow: function(){
    this.rows++;
    var row = document.createElement('div');
    $(row).addClass('row');
    $(row).attr('id', 'row-'+this.rows);
    $(this.wrapper).append(row);
    this.cols = 0;
    return $(row);
  },

  refreshRowColsIndexes: function(row){
    var children = row.prop('children');
    for(var i = 0 ; i < children.length; i++){
      var index = i + 1;
      $(children[i]).attr('id', 'col-'+index);
    }
  },

  connectNodes: function(parent){
    if(parent.children.length > 0){
      parentCol = $('#node-'+parent.id).closest('.col');
      parentCol.find('.vertical-bottom-line').remove();
      parentCol.find('.horizontal-bottom-line').remove();
      parentCol.append('<div class="vertical-bottom-line"></div>')
      var firstChild = $('#node-'+parent.children[0].id).closest('.col');
      var secondChild = $('#node-'+parent.children[parent.children.length-1].id).closest('.col');
      var width = secondChild.offset().left - firstChild.offset().left;
      width = width+1
      var left = (parentCol.offset().left -firstChild.offset().left);
      console.log(parentCol.offset().left, firstChild.offset().left);
      left = left - 55;
      parentCol.append('<div style="width: '+width+'; left: '+-left+'px" class="horizontal-bottom-line"></div>');
      for (var key in parent.children){
        var child = $("#node-"+parent.children[key].id);
        childCol = child.closest('.col')
        childCol.append('<div class="vertical-top-line"></div>');
        if(childCol.attr('has-children') == 'true')
          this.connectNodes(parent.children[key]);
      }
    }

  }

}
