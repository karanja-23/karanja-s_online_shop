"""adds active column to the product table

Revision ID: e04de60aa8df
Revises: d4ce37e2a277
Create Date: 2025-01-26 14:24:51.074528

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e04de60aa8df'
down_revision = 'd4ce37e2a277'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.add_column(sa.Column('status', sa.String(length=255), default='active'))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.drop_column('status')

    # ### end Alembic commands ###
