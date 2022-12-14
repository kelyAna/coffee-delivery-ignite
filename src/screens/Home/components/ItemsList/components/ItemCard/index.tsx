import { NavLink } from 'react-router-dom'
import { Counter } from '../../../Counter'
import {
  ItemActionsCard,
  ItemBuyCard,
  ItemCardContainer,
  ItemCardTag,
  ItemCardTagList,
  ItemCart,
  ItemCartImage,
  ItemDescriptionCard,
  ItemNameCard,
  ItemPriceCard,
} from './styles'

import cartIcon from '../../../../../../assets/shop-cart-icon.svg'

export type ItemCardProps = {
  imgSRC: string
  tags: string[]
  name: string
  description: string
  price: string
  increaseQuantity: () => void
  decreaseQuantity: () => void
  itemsQuantity: number
  disabled: boolean
};

export const ItemCard = ({
  imgSRC,
  tags,
  name,
  description,
  price,
  increaseQuantity,
  decreaseQuantity,
  itemsQuantity,
  disabled
}: ItemCardProps) => {
  return (
    <ItemCardContainer>
      <ItemCartImage src={imgSRC} />
      <ItemCardTagList>
        {tags.map((tag) => (
          <ItemCardTag key={tag}>
            <span>{tag}</span>
          </ItemCardTag>
        ))}
      </ItemCardTagList>
      <ItemNameCard>{name}</ItemNameCard>
      <ItemDescriptionCard>{description}</ItemDescriptionCard>

      <ItemBuyCard>
        <ItemPriceCard>
          <p>R$</p> <h2>{price}</h2>
        </ItemPriceCard>
        <ItemActionsCard>
          <Counter
            disabled={disabled}
            itemsQuantity={itemsQuantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
          <NavLink to="/checkout">
            <ItemCart>
              <img src={cartIcon} />
            </ItemCart>
          </NavLink>
        </ItemActionsCard>
      </ItemBuyCard>
    </ItemCardContainer>
  );
};
