import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AssemblyCoreContract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const assemblyCoreContractAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'CraftBlocked' },
  { type: 'error', inputs: [], name: 'CreationDisabled' },
  { type: 'error', inputs: [], name: 'CriteriaNotMet' },
  { type: 'error', inputs: [], name: 'InsufficientItemBalance' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'currentTier', internalType: 'uint256', type: 'uint256' },
      { name: 'requiredTier', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientItemTier',
  },
  {
    type: 'error',
    inputs: [
      { name: 'required', internalType: 'uint256', type: 'uint256' },
      { name: 'available', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientMatchingItems',
  },
  {
    type: 'error',
    inputs: [
      { name: 'required', internalType: 'uint256', type: 'uint256' },
      { name: 'available', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientMatchingOtoms',
  },
  { type: 'error', inputs: [], name: 'InsufficientOtomBalance' },
  {
    type: 'error',
    inputs: [
      { name: 'required', internalType: 'uint256', type: 'uint256' },
      { name: 'provided', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientPayment',
  },
  { type: 'error', inputs: [], name: 'InvalidBlueprintComponent' },
  { type: 'error', inputs: [], name: 'InvalidCraftAmount' },
  { type: 'error', inputs: [], name: 'InvalidFeeRecipient' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidItem' },
  { type: 'error', inputs: [], name: 'InvalidName' },
  {
    type: 'error',
    inputs: [{ name: 'tier', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidTier',
  },
  { type: 'error', inputs: [], name: 'InvalidTraitType' },
  { type: 'error', inputs: [], name: 'InvalidTraits' },
  { type: 'error', inputs: [], name: 'ItemAlreadyFrozen' },
  { type: 'error', inputs: [], name: 'ItemDoesNotExist' },
  {
    type: 'error',
    inputs: [{ name: 'itemId', internalType: 'uint256', type: 'uint256' }],
    name: 'ItemIsFrozen',
  },
  { type: 'error', inputs: [], name: 'MissingItemId' },
  { type: 'error', inputs: [], name: 'MissmatchItemType' },
  { type: 'error', inputs: [], name: 'MutatorBlockedTransfer' },
  { type: 'error', inputs: [], name: 'MutatorFailed' },
  { type: 'error', inputs: [], name: 'NotAdmin' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'NotOwner',
  },
  { type: 'error', inputs: [], name: 'OnlyFungible' },
  { type: 'error', inputs: [], name: 'OnlyNonFungible' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'PaymentFailed' },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  { type: 'error', inputs: [], name: 'RefundFailed' },
  { type: 'error', inputs: [], name: 'TraitNotFound' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'isEnabled', internalType: 'bool', type: 'bool', indexed: true },
    ],
    name: 'CreationEnabledSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'crafter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'itemId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'actualComponents',
        internalType: 'struct ActualBlueprintComponent[]',
        type: 'tuple[]',
        components: [
          {
            name: 'componentType',
            internalType: 'enum ComponentType',
            type: 'uint8',
          },
          {
            name: 'itemIdOrOtomTokenId',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'criteria',
            internalType: 'struct PropertyCriterion[]',
            type: 'tuple[]',
            components: [
              {
                name: 'propertyType',
                internalType: 'enum PropertyType',
                type: 'uint8',
              },
              { name: 'minValue', internalType: 'uint256', type: 'uint256' },
              { name: 'maxValue', internalType: 'uint256', type: 'uint256' },
              { name: 'boolValue', internalType: 'bool', type: 'bool' },
              { name: 'checkBoolValue', internalType: 'bool', type: 'bool' },
              { name: 'stringValue', internalType: 'string', type: 'string' },
              { name: 'checkStringValue', internalType: 'bool', type: 'bool' },
              {
                name: 'bytes32Value',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'checkBytes32Value', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
        indexed: false,
      },
    ],
    name: 'ItemCrafted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'itemId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'ItemCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'itemId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ItemDestroyed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'itemId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ItemFrozen',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'itemId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ItemUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'itemId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ItemUsed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'itemIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ItemsApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'otomItems',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OtomItemsSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'renderer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RendererSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'TokensApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'traits',
        internalType: 'struct Trait[]',
        type: 'tuple[]',
        components: [
          { name: 'typeName', internalType: 'string', type: 'string' },
          { name: 'valueString', internalType: 'string', type: 'string' },
          { name: 'valueNumber', internalType: 'uint256', type: 'uint256' },
          { name: 'traitType', internalType: 'enum TraitType', type: 'uint8' },
        ],
        indexed: false,
      },
    ],
    name: 'TraitsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'validator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ValidatorSet',
  },
  {
    type: 'function',
    inputs: [
      { name: '_itemId', internalType: 'uint256', type: 'uint256' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_owner', internalType: 'address', type: 'address' },
    ],
    name: 'consumeItem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_itemId', internalType: 'uint256', type: 'uint256' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      {
        name: '_variableOtomIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      {
        name: '_nonFungibleTokenIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'craftItem',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_description', internalType: 'string', type: 'string' },
      { name: '_defaultImageUri', internalType: 'string', type: 'string' },
      {
        name: '_blueprint',
        internalType: 'struct BlueprintComponent[]',
        type: 'tuple[]',
        components: [
          {
            name: 'componentType',
            internalType: 'enum ComponentType',
            type: 'uint8',
          },
          {
            name: 'itemIdOrOtomTokenId',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'criteria',
            internalType: 'struct PropertyCriterion[]',
            type: 'tuple[]',
            components: [
              {
                name: 'propertyType',
                internalType: 'enum PropertyType',
                type: 'uint8',
              },
              { name: 'minValue', internalType: 'uint256', type: 'uint256' },
              { name: 'maxValue', internalType: 'uint256', type: 'uint256' },
              { name: 'boolValue', internalType: 'bool', type: 'bool' },
              { name: 'checkBoolValue', internalType: 'bool', type: 'bool' },
              { name: 'stringValue', internalType: 'string', type: 'string' },
              { name: 'checkStringValue', internalType: 'bool', type: 'bool' },
              {
                name: 'bytes32Value',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'checkBytes32Value', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
      {
        name: '_traits',
        internalType: 'struct Trait[]',
        type: 'tuple[]',
        components: [
          { name: 'typeName', internalType: 'string', type: 'string' },
          { name: 'valueString', internalType: 'string', type: 'string' },
          { name: 'valueNumber', internalType: 'uint256', type: 'uint256' },
          { name: 'traitType', internalType: 'enum TraitType', type: 'uint8' },
        ],
      },
      { name: '_ethCostInWei', internalType: 'uint256', type: 'uint256' },
      { name: '_feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'createFungibleItem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_description', internalType: 'string', type: 'string' },
      { name: '_defaultImageUri', internalType: 'string', type: 'string' },
      {
        name: '_defaultTierImageUris',
        internalType: 'string[7]',
        type: 'string[7]',
      },
      {
        name: '_blueprint',
        internalType: 'struct BlueprintComponent[]',
        type: 'tuple[]',
        components: [
          {
            name: 'componentType',
            internalType: 'enum ComponentType',
            type: 'uint8',
          },
          {
            name: 'itemIdOrOtomTokenId',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'criteria',
            internalType: 'struct PropertyCriterion[]',
            type: 'tuple[]',
            components: [
              {
                name: 'propertyType',
                internalType: 'enum PropertyType',
                type: 'uint8',
              },
              { name: 'minValue', internalType: 'uint256', type: 'uint256' },
              { name: 'maxValue', internalType: 'uint256', type: 'uint256' },
              { name: 'boolValue', internalType: 'bool', type: 'bool' },
              { name: 'checkBoolValue', internalType: 'bool', type: 'bool' },
              { name: 'stringValue', internalType: 'string', type: 'string' },
              { name: 'checkStringValue', internalType: 'bool', type: 'bool' },
              {
                name: 'bytes32Value',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'checkBytes32Value', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
      {
        name: '_traits',
        internalType: 'struct Trait[]',
        type: 'tuple[]',
        components: [
          { name: 'typeName', internalType: 'string', type: 'string' },
          { name: 'valueString', internalType: 'string', type: 'string' },
          { name: 'valueNumber', internalType: 'uint256', type: 'uint256' },
          { name: 'traitType', internalType: 'enum TraitType', type: 'uint8' },
        ],
      },
      { name: '_mutatorContract', internalType: 'address', type: 'address' },
      { name: '_ethCostInWei', internalType: 'uint256', type: 'uint256' },
      { name: '_feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'createNonFungibleItem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'creationEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_itemId', internalType: 'uint256', type: 'uint256' }],
    name: 'freezeItem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'frozenItems',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_itemId', internalType: 'uint256', type: 'uint256' }],
    name: 'getItemByItemId',
    outputs: [
      {
        name: '',
        internalType: 'struct Item',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'admin', internalType: 'address', type: 'address' },
          { name: 'defaultImageUri', internalType: 'string', type: 'string' },
          { name: 'itemType', internalType: 'enum ItemType', type: 'uint8' },
          {
            name: 'blueprint',
            internalType: 'struct BlueprintComponent[]',
            type: 'tuple[]',
            components: [
              {
                name: 'componentType',
                internalType: 'enum ComponentType',
                type: 'uint8',
              },
              {
                name: 'itemIdOrOtomTokenId',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
              {
                name: 'criteria',
                internalType: 'struct PropertyCriterion[]',
                type: 'tuple[]',
                components: [
                  {
                    name: 'propertyType',
                    internalType: 'enum PropertyType',
                    type: 'uint8',
                  },
                  {
                    name: 'minValue',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                  {
                    name: 'maxValue',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                  { name: 'boolValue', internalType: 'bool', type: 'bool' },
                  {
                    name: 'checkBoolValue',
                    internalType: 'bool',
                    type: 'bool',
                  },
                  {
                    name: 'stringValue',
                    internalType: 'string',
                    type: 'string',
                  },
                  {
                    name: 'checkStringValue',
                    internalType: 'bool',
                    type: 'bool',
                  },
                  {
                    name: 'bytes32Value',
                    internalType: 'bytes32',
                    type: 'bytes32',
                  },
                  {
                    name: 'checkBytes32Value',
                    internalType: 'bool',
                    type: 'bool',
                  },
                ],
              },
            ],
          },
          { name: 'mutatorContract', internalType: 'address', type: 'address' },
          { name: 'ethCostInWei', internalType: 'uint256', type: 'uint256' },
          { name: 'feeRecipient', internalType: 'address', type: 'address' },
          {
            name: 'defaultTierImageUris',
            internalType: 'string[7]',
            type: 'string[7]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getItemIdForToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'itemId', internalType: 'uint256', type: 'uint256' },
      { name: 'mintIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getNonFungibleTokenId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenDefaultImageUri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_traitName', internalType: 'string', type: 'string' },
    ],
    name: 'getTokenTrait',
    outputs: [
      {
        name: '',
        internalType: 'struct Trait',
        type: 'tuple',
        components: [
          { name: 'typeName', internalType: 'string', type: 'string' },
          { name: 'valueString', internalType: 'string', type: 'string' },
          { name: 'valueNumber', internalType: 'uint256', type: 'uint256' },
          { name: 'traitType', internalType: 'enum TraitType', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenTraits',
    outputs: [
      {
        name: '',
        internalType: 'struct Trait[]',
        type: 'tuple[]',
        components: [
          { name: 'typeName', internalType: 'string', type: 'string' },
          { name: 'valueString', internalType: 'string', type: 'string' },
          { name: 'valueNumber', internalType: 'uint256', type: 'uint256' },
          { name: 'traitType', internalType: 'enum TraitType', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenUri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_otomsAddress', internalType: 'address', type: 'address' },
      {
        name: '_otomsValidationAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_itemId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isApprovedForItem',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isApprovedForToken',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'isFungibleTokenId',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'itemMintCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextItemId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'nonFungibleTokenToActualBlueprint',
    outputs: [
      {
        name: '',
        internalType: 'struct ActualBlueprintComponent[]',
        type: 'tuple[]',
        components: [
          {
            name: 'componentType',
            internalType: 'enum ComponentType',
            type: 'uint8',
          },
          {
            name: 'itemIdOrOtomTokenId',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'criteria',
            internalType: 'struct PropertyCriterion[]',
            type: 'tuple[]',
            components: [
              {
                name: 'propertyType',
                internalType: 'enum PropertyType',
                type: 'uint8',
              },
              { name: 'minValue', internalType: 'uint256', type: 'uint256' },
              { name: 'maxValue', internalType: 'uint256', type: 'uint256' },
              { name: 'boolValue', internalType: 'bool', type: 'bool' },
              { name: 'checkBoolValue', internalType: 'bool', type: 'bool' },
              { name: 'stringValue', internalType: 'string', type: 'string' },
              { name: 'checkStringValue', internalType: 'bool', type: 'bool' },
              {
                name: 'bytes32Value',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'checkBytes32Value', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'nonFungibleTokenToTier',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'onUpdate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_itemIds', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForItemIds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForTokenIds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'isEnabled', internalType: 'bool', type: 'bool' }],
    name: 'setCreationEnabled',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_itemId', internalType: 'uint256', type: 'uint256' },
      { name: '_admin', internalType: 'address', type: 'address' },
    ],
    name: 'setItemAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_otomItemsAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setOtomItems',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_rendererAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setRenderer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_validatorAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setValidator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_itemId', internalType: 'uint256', type: 'uint256' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_description', internalType: 'string', type: 'string' },
      {
        name: '_blueprint',
        internalType: 'struct BlueprintComponent[]',
        type: 'tuple[]',
        components: [
          {
            name: 'componentType',
            internalType: 'enum ComponentType',
            type: 'uint8',
          },
          {
            name: 'itemIdOrOtomTokenId',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'criteria',
            internalType: 'struct PropertyCriterion[]',
            type: 'tuple[]',
            components: [
              {
                name: 'propertyType',
                internalType: 'enum PropertyType',
                type: 'uint8',
              },
              { name: 'minValue', internalType: 'uint256', type: 'uint256' },
              { name: 'maxValue', internalType: 'uint256', type: 'uint256' },
              { name: 'boolValue', internalType: 'bool', type: 'bool' },
              { name: 'checkBoolValue', internalType: 'bool', type: 'bool' },
              { name: 'stringValue', internalType: 'string', type: 'string' },
              { name: 'checkStringValue', internalType: 'bool', type: 'bool' },
              {
                name: 'bytes32Value',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'checkBytes32Value', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
      {
        name: '_traits',
        internalType: 'struct Trait[]',
        type: 'tuple[]',
        components: [
          { name: 'typeName', internalType: 'string', type: 'string' },
          { name: 'valueString', internalType: 'string', type: 'string' },
          { name: 'valueNumber', internalType: 'uint256', type: 'uint256' },
          { name: 'traitType', internalType: 'enum TraitType', type: 'uint8' },
        ],
      },
      { name: '_ethCostInWei', internalType: 'uint256', type: 'uint256' },
      { name: '_feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'updateFungibleItem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_itemId', internalType: 'uint256', type: 'uint256' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_description', internalType: 'string', type: 'string' },
      { name: '_defaultImageUri', internalType: 'string', type: 'string' },
      {
        name: '_defaultTierImageUris',
        internalType: 'string[7]',
        type: 'string[7]',
      },
      {
        name: '_blueprint',
        internalType: 'struct BlueprintComponent[]',
        type: 'tuple[]',
        components: [
          {
            name: 'componentType',
            internalType: 'enum ComponentType',
            type: 'uint8',
          },
          {
            name: 'itemIdOrOtomTokenId',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'criteria',
            internalType: 'struct PropertyCriterion[]',
            type: 'tuple[]',
            components: [
              {
                name: 'propertyType',
                internalType: 'enum PropertyType',
                type: 'uint8',
              },
              { name: 'minValue', internalType: 'uint256', type: 'uint256' },
              { name: 'maxValue', internalType: 'uint256', type: 'uint256' },
              { name: 'boolValue', internalType: 'bool', type: 'bool' },
              { name: 'checkBoolValue', internalType: 'bool', type: 'bool' },
              { name: 'stringValue', internalType: 'string', type: 'string' },
              { name: 'checkStringValue', internalType: 'bool', type: 'bool' },
              {
                name: 'bytes32Value',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'checkBytes32Value', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
      {
        name: '_traits',
        internalType: 'struct Trait[]',
        type: 'tuple[]',
        components: [
          { name: 'typeName', internalType: 'string', type: 'string' },
          { name: 'valueString', internalType: 'string', type: 'string' },
          { name: 'valueNumber', internalType: 'uint256', type: 'uint256' },
          { name: 'traitType', internalType: 'enum TraitType', type: 'uint8' },
        ],
      },
      { name: '_mutatorContract', internalType: 'address', type: 'address' },
      { name: '_ethCostInWei', internalType: 'uint256', type: 'uint256' },
      { name: '_feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'updateNonFungibleItem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'useItem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__
 */
export const useReadAssemblyCoreContract = /*#__PURE__*/ createUseReadContract({
  abi: assemblyCoreContractAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"creationEnabled"`
 */
export const useReadAssemblyCoreContractCreationEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'creationEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"frozenItems"`
 */
export const useReadAssemblyCoreContractFrozenItems =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'frozenItems',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"getItemByItemId"`
 */
export const useReadAssemblyCoreContractGetItemByItemId =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'getItemByItemId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"getItemIdForToken"`
 */
export const useReadAssemblyCoreContractGetItemIdForToken =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'getItemIdForToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"getNonFungibleTokenId"`
 */
export const useReadAssemblyCoreContractGetNonFungibleTokenId =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'getNonFungibleTokenId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"getTokenDefaultImageUri"`
 */
export const useReadAssemblyCoreContractGetTokenDefaultImageUri =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'getTokenDefaultImageUri',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"getTokenTrait"`
 */
export const useReadAssemblyCoreContractGetTokenTrait =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'getTokenTrait',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"getTokenTraits"`
 */
export const useReadAssemblyCoreContractGetTokenTraits =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'getTokenTraits',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"getTokenUri"`
 */
export const useReadAssemblyCoreContractGetTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'getTokenUri',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"isApprovedForItem"`
 */
export const useReadAssemblyCoreContractIsApprovedForItem =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'isApprovedForItem',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"isApprovedForToken"`
 */
export const useReadAssemblyCoreContractIsApprovedForToken =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'isApprovedForToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"isFungibleTokenId"`
 */
export const useReadAssemblyCoreContractIsFungibleTokenId =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'isFungibleTokenId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"itemMintCount"`
 */
export const useReadAssemblyCoreContractItemMintCount =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'itemMintCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"nextItemId"`
 */
export const useReadAssemblyCoreContractNextItemId =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'nextItemId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"nonFungibleTokenToActualBlueprint"`
 */
export const useReadAssemblyCoreContractNonFungibleTokenToActualBlueprint =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'nonFungibleTokenToActualBlueprint',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"nonFungibleTokenToTier"`
 */
export const useReadAssemblyCoreContractNonFungibleTokenToTier =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'nonFungibleTokenToTier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"owner"`
 */
export const useReadAssemblyCoreContractOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: assemblyCoreContractAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__
 */
export const useWriteAssemblyCoreContract =
  /*#__PURE__*/ createUseWriteContract({ abi: assemblyCoreContractAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"consumeItem"`
 */
export const useWriteAssemblyCoreContractConsumeItem =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'consumeItem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"craftItem"`
 */
export const useWriteAssemblyCoreContractCraftItem =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'craftItem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"createFungibleItem"`
 */
export const useWriteAssemblyCoreContractCreateFungibleItem =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'createFungibleItem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"createNonFungibleItem"`
 */
export const useWriteAssemblyCoreContractCreateNonFungibleItem =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'createNonFungibleItem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"freezeItem"`
 */
export const useWriteAssemblyCoreContractFreezeItem =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'freezeItem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteAssemblyCoreContractInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"onUpdate"`
 */
export const useWriteAssemblyCoreContractOnUpdate =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'onUpdate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteAssemblyCoreContractRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setApprovalForItemIds"`
 */
export const useWriteAssemblyCoreContractSetApprovalForItemIds =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setApprovalForItemIds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setApprovalForTokenIds"`
 */
export const useWriteAssemblyCoreContractSetApprovalForTokenIds =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setApprovalForTokenIds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setCreationEnabled"`
 */
export const useWriteAssemblyCoreContractSetCreationEnabled =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setCreationEnabled',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setItemAdmin"`
 */
export const useWriteAssemblyCoreContractSetItemAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setItemAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setOtomItems"`
 */
export const useWriteAssemblyCoreContractSetOtomItems =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setOtomItems',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setRenderer"`
 */
export const useWriteAssemblyCoreContractSetRenderer =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setRenderer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setValidator"`
 */
export const useWriteAssemblyCoreContractSetValidator =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setValidator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteAssemblyCoreContractTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"updateFungibleItem"`
 */
export const useWriteAssemblyCoreContractUpdateFungibleItem =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'updateFungibleItem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"updateNonFungibleItem"`
 */
export const useWriteAssemblyCoreContractUpdateNonFungibleItem =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'updateNonFungibleItem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"useItem"`
 */
export const useWriteAssemblyCoreContractUseItem =
  /*#__PURE__*/ createUseWriteContract({
    abi: assemblyCoreContractAbi,
    functionName: 'useItem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__
 */
export const useSimulateAssemblyCoreContract =
  /*#__PURE__*/ createUseSimulateContract({ abi: assemblyCoreContractAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"consumeItem"`
 */
export const useSimulateAssemblyCoreContractConsumeItem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'consumeItem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"craftItem"`
 */
export const useSimulateAssemblyCoreContractCraftItem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'craftItem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"createFungibleItem"`
 */
export const useSimulateAssemblyCoreContractCreateFungibleItem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'createFungibleItem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"createNonFungibleItem"`
 */
export const useSimulateAssemblyCoreContractCreateNonFungibleItem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'createNonFungibleItem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"freezeItem"`
 */
export const useSimulateAssemblyCoreContractFreezeItem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'freezeItem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateAssemblyCoreContractInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"onUpdate"`
 */
export const useSimulateAssemblyCoreContractOnUpdate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'onUpdate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateAssemblyCoreContractRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setApprovalForItemIds"`
 */
export const useSimulateAssemblyCoreContractSetApprovalForItemIds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setApprovalForItemIds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setApprovalForTokenIds"`
 */
export const useSimulateAssemblyCoreContractSetApprovalForTokenIds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setApprovalForTokenIds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setCreationEnabled"`
 */
export const useSimulateAssemblyCoreContractSetCreationEnabled =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setCreationEnabled',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setItemAdmin"`
 */
export const useSimulateAssemblyCoreContractSetItemAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setItemAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setOtomItems"`
 */
export const useSimulateAssemblyCoreContractSetOtomItems =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setOtomItems',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setRenderer"`
 */
export const useSimulateAssemblyCoreContractSetRenderer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setRenderer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"setValidator"`
 */
export const useSimulateAssemblyCoreContractSetValidator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'setValidator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateAssemblyCoreContractTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"updateFungibleItem"`
 */
export const useSimulateAssemblyCoreContractUpdateFungibleItem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'updateFungibleItem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"updateNonFungibleItem"`
 */
export const useSimulateAssemblyCoreContractUpdateNonFungibleItem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'updateNonFungibleItem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `functionName` set to `"useItem"`
 */
export const useSimulateAssemblyCoreContractUseItem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assemblyCoreContractAbi,
    functionName: 'useItem',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__
 */
export const useWatchAssemblyCoreContractEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: assemblyCoreContractAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"CreationEnabledSet"`
 */
export const useWatchAssemblyCoreContractCreationEnabledSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'CreationEnabledSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchAssemblyCoreContractInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"ItemCrafted"`
 */
export const useWatchAssemblyCoreContractItemCraftedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'ItemCrafted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"ItemCreated"`
 */
export const useWatchAssemblyCoreContractItemCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'ItemCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"ItemDestroyed"`
 */
export const useWatchAssemblyCoreContractItemDestroyedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'ItemDestroyed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"ItemFrozen"`
 */
export const useWatchAssemblyCoreContractItemFrozenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'ItemFrozen',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"ItemUpdated"`
 */
export const useWatchAssemblyCoreContractItemUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'ItemUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"ItemUsed"`
 */
export const useWatchAssemblyCoreContractItemUsedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'ItemUsed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"ItemsApprovalForAll"`
 */
export const useWatchAssemblyCoreContractItemsApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'ItemsApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"OtomItemsSet"`
 */
export const useWatchAssemblyCoreContractOtomItemsSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'OtomItemsSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchAssemblyCoreContractOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"RendererSet"`
 */
export const useWatchAssemblyCoreContractRendererSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'RendererSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"TokensApprovalForAll"`
 */
export const useWatchAssemblyCoreContractTokensApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'TokensApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"TraitsUpdated"`
 */
export const useWatchAssemblyCoreContractTraitsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'TraitsUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assemblyCoreContractAbi}__ and `eventName` set to `"ValidatorSet"`
 */
export const useWatchAssemblyCoreContractValidatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assemblyCoreContractAbi,
    eventName: 'ValidatorSet',
  })
