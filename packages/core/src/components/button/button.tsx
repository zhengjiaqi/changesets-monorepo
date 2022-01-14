import { Component, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils';

/**
 *
 * @slot - 默认插槽，按钮内容放在具名插槽之间。
 * @slot icon - 放置按钮图标的插槽。
 * @slot start - 按钮内容左边的插槽。
 * @slot end - 按钮内容右边的插槽.
 *
 * @part native - 包裹所有子元素的原生 HTML 元素，为 button 标签。
 */
@Component({
  tag: 'nami-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * 按钮尺寸.
   */
  @Prop({ reflect: true }) size?: 'small' | 'default' | 'large';

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private handleClick = (event: Event) => {
    console.log('---click---', event);
  }

  render() {
    return (
      <Host
        onClick={this.handleClick}
      >
        <button
          part="native"
        >
          Hello, World! I'm {this.getText()}
        </button>
      </Host>
    );
  }
}
