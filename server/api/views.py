from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Item
from .serializers import ItemSerializer

# api call list
@api_view(['GET'])
def getAPI(request):
    api_urls = {
        'base-ui':{
            'List':'/items/',
            'Create':'/items/add/',
            'Delete':'/items/del/<id>',
            'Update':'/items/upd/<id>'
        }
    }
    
    return Response(api_urls)

# base ui api calls
@api_view(['GET'])
def getItems(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def getItemDetail(request, pk):
    items = Item.objects.get(id=pk)
    serializer = ItemSerializer(items, many=False)
    
    return Response(serializer.data)

@api_view(['POST'])
def addItem(request):
    serializer = ItemSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)
        
    return Response(serializer.data)

@api_view(['POST'])
def updateItem(request, pk):
    item = Item.objects.get(id=pk)
    serializer = ItemSerializer(instance=item, data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)
        
    return Response(serializer.data)

@api_view(['POST'])
def deleteItem(pk):
    item = Item.objects.get(id=pk)
    
    try:
        item.delete()
        print('deleted')
        return Response('Deletion successful')
    except Exception as err:
        print(err)
        return err