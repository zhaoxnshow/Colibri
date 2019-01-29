import { Directive, ElementRef, HostListener, Input} from '@angular/core';
import { ValueObject, FirstUtil } from '../../shared/utilities/dammy-utilities';

declare var $:any;
// declare var WebuiPopovers: any;

@Directive({
  selector: '[checkChange]'
})
export class CheckChangeDirective {
  private elementId: string;
  private originalColor: string;
  private isChange: boolean = false;
  private highLightColor: string = 'red';//'#800080';

  @Input() compValObj: ValueObject;  
  @Input() reviewFlag: boolean;

  constructor(private el: ElementRef) {
    this.elementId = '#'.concat(this.el.nativeElement.id);
  }

  ngOnInit() {
    if (!FirstUtil.isBlank(this.compValObj.pre) && 
      !FirstUtil.isBlank(this.compValObj.last) && 
      this.compValObj.pre !== this.compValObj.last) {
      this.isChange = true;
    }
  }

  ngOnChanges() {
    this.highlightAndPopover();
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   console.log('mouseenter');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   console.log('mouseleave');
  // }

  @HostListener('focus') onFocus() {
    console.log('focus on ' + this.elementId);
    if (!this.reviewFlag || !this.isChange) {
      return;
    }
    this.originalColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderColor  = null;
    $(this.elementId).webuiPopover('hide');
  }

  @HostListener('blur') onBlur() {
    console.log('blur from ' + this.elementId);
    if (!this.reviewFlag || !this.isChange) {
      return;
    }
    this.el.nativeElement.style.borderColor  = this.originalColor;
  }

  private highlightAndPopover() {
    // WebuiPopovers.hide();
    $(this.elementId).webuiPopover('destroy');
    if (this.reviewFlag && this.isChange) {
      this.el.nativeElement.style.borderColor  = this.highLightColor;
      this.addPopover(this.generateContent());
    } else {
      this.el.nativeElement.style.borderColor  = null;
    }
  }

  private generateContent(): string{
    let prefix: string = '<div class="popover-div-font">';
    let suffix: string = '</div>';
    let span_p: string = '<span class="popover-font-color">';
    let span_s: string = '</span>';
    let blank: string = '&nbsp;';
    let br: string = '<br/>';
    let from: string = 'From';
    let to: string = 'To';
    let contentHtml: string = '';

    contentHtml = contentHtml.concat(prefix);
    contentHtml = contentHtml.concat(this.compValObj.modifier);
    contentHtml = contentHtml.concat(blank);
    contentHtml = contentHtml.concat(this.compValObj.chgDate);
    contentHtml = contentHtml.concat(br);
    contentHtml = contentHtml.concat(from);
    contentHtml = contentHtml.concat(blank);
    contentHtml = contentHtml.concat(span_p);
    contentHtml = contentHtml.concat(this.compValObj.pre);
    contentHtml = contentHtml.concat(span_s);
    contentHtml = contentHtml.concat(blank);
    contentHtml = contentHtml.concat(to);
    contentHtml = contentHtml.concat(blank);
    contentHtml = contentHtml.concat(span_p);
    contentHtml = contentHtml.concat(this.compValObj.last);
    contentHtml = contentHtml.concat(span_s);
    contentHtml = contentHtml.concat(suffix);

    return contentHtml;
  }

  private addPopover(contentHtml:string) {
    // placement:'auto',//值: auto,top,right,bottom,left,top-right,top-left,bottom-right,bottom-left
    // width:'auto',//可以设置数字
    // height:'auto',//可以设置数字
    // trigger:'click',//值:click,hover
    // style:'',//值:'',inverse
    // delay:300,//延迟时间, 悬浮属性才执行
    // cache:true,//如果缓存设置为false,将重建
    // multi:false,//在页面允许其他弹出层
    // arrow:true,//是否显示箭头
    // title:'',//标题,如果标题设置为空字符串时,标题栏会自动隐藏
    // content:'',//内容,内容可以是函数
    // closeable:false,//显示关闭按钮
    // padding:true,//内容填充
    // type:'html',//内容类型, 值:'html','iframe','async'
    // url:''//如果不是空的,插件将通过url加载内容
    var settings = {
      placement: 'auto',
      trigger: 'hover',
      content: contentHtml,
      delay: {   
          show: 0,
          hide: 0
      },
      width: 300,
      height: 'auto',
      multi: false,
      closeable: false,
      cache: false,
      style: 'inverse',
      padding: true,
      onShow: function ($element) {
        console.log('popover show.');
      },
      onHide: function ($element) {
        console.log('popover hide.');
      }
    };
    $(this.elementId).webuiPopover(settings);
    // WebuiPopovers.show(this.el.nativeElement, settings);
  }
}